import SimpleSchema from 'simpl-schema';

import { Avatars } from '/imports/api/collections';

import { PermissionsMixin } from 'meteor/didericis:permissions-mixin';
import BaseMethod from './lib/base_method';
import collision, { getPolygon } from '../collision';
import { minBy, flatten } from 'lodash';

const DEFAULT_SNAP_DISTANCE = 20;
const getDistance = (v1, v2) => (
  v1.clone().sub(v2).len()
);
const getAbsolutePoints = ({ shapeId, position, rotation, backface }) => {
  const poly = getPolygon({ shapeId, position, rotation, backface });
  return poly.calcPoints.map(v => v.clone().add(poly.pos));
};

const getShortestDistance = (shapeA, shapeB) => {
  // console.log(shapeA, shapeB);
  const pointsA = getAbsolutePoints(shapeA);
  const pointsB = getAbsolutePoints(shapeB);
  const distances = pointsA.map(va => (
    pointsB.map(vb => ({
      va, vb, distance: getDistance(va, vb),
    }))
  ));
  return minBy(flatten(distances), 'distance');
};
/* eslint no-param-reassign: 0*/
const checkCollisionAndMoveOthers = ({
  avatar,
  shapeId,
  newPosition = null,
  newRotation = null,
  newFace = null,
  blackList = [],
  snapDistance = DEFAULT_SNAP_DISTANCE,
}) => {
  const shape = avatar.shapes[shapeId];
  if (newPosition !== null) {
    // console.log('updating shape position', shapeId, newPosition);
    avatar.shapes[shapeId].position = newPosition;
  }
  if (newRotation !== null) {
    avatar.shapes[shapeId].rotation = newRotation;
  }

  if (newFace !== null) {
    avatar.shapes[shapeId].backface = newFace;
  }

  // check the other shapes
  const collisions = collision({ avatar, shapeId, newPosition, newRotation, newFace, blackList });
  collisions.forEach((c) => {
    // console.log(c);
    const otherShape = avatar.shapes[c.shapeId];
    const shortestDistance = getShortestDistance({ ...shape, shapeId }, { ...otherShape, shapeId: c.shapeId });
    let offset;
    let moved = false;
    if (c.collides) {
      moved = true;
    }
    if (shortestDistance.distance <= snapDistance) {
      moved = true;
      // console.log('snapping', c.shapeId);
      offset = shortestDistance.va.sub(shortestDistance.vb);
    } else {
      offset = { x: 0, y: 0 };
    }
    const movedPos = {
      x: otherShape.position.x + (c.collides ? c.response.overlapV.x : 0) + offset.x,
      y: otherShape.position.y + (c.collides ? c.response.overlapV.y : 0) + offset.y,
    };
    // todo checki movedPos is near the current shape corners
    //  const corners = shape.points.map
    if (moved) {
      checkCollisionAndMoveOthers({
        avatar,
        shapeId: c.shapeId,
        newPosition: movedPos,
        blackList: [shapeId, ...blackList],
      });
    }
  });
};
export default {
  setShapePosition: new BaseMethod({
    allow: PermissionsMixin.LoggedIn,
    name: 'avatar.setShapePosition',
    schema: new SimpleSchema({
      avatarId: String,
      shapeId: String,
      x: Number,
      y: Number,
      snapDistance: {
        type: Number,
        optional: true,
      },
    }),
    run({ avatarId, shapeId, x, y, snapDistance }) {
      const avatar = Avatars.findOne(avatarId);
      checkCollisionAndMoveOthers({ avatar, shapeId, newPosition: { x, y }, snapDistance });
      Avatars.update(avatarId, { $set: avatar });
    },
  }),
  setShapeRotation: new BaseMethod({
    allow: PermissionsMixin.LoggedIn,
    name: 'avatar.setShapeRotation',
    schema: new SimpleSchema({
      avatarId: String,
      shapeId: String,
      rotation: Number,
      snapDistance: {
        type: Number,
        optional: true,
      },
    }),
    run({ avatarId, shapeId, rotation, snapDistance }) {
      const avatar = Avatars.findOne(avatarId);
      checkCollisionAndMoveOthers({ avatar, shapeId, newRotation: rotation, snapDistance });
      Avatars.update(avatarId, { $set: avatar });
    },
  }),
  setShapebackface: new BaseMethod({
    allow: PermissionsMixin.LoggedIn,
    name: 'avatar.setShapebackface',
    schema: new SimpleSchema({
      avatarId: String,
      shapeId: String,
      backface: Boolean,
      snapDistance: {
        type: Number,
        optional: true,
      },
    }),
    run({ avatarId, shapeId, backface, snapDistance }) {
      const avatar = Avatars.findOne(avatarId);
      checkCollisionAndMoveOthers({ avatar, shapeId, newFace: backface, snapDistance });
      Avatars.update(avatarId, { $set: avatar });
    },
  }),
  setAvatarName: new BaseMethod({
    allow: PermissionsMixin.LoggedIn,
    name: 'avatar.setAvatarName',
    schema: new SimpleSchema({
      avatarId: String,
      name: String,
    }),
    run({ avatarId, name }) {
      Avatars.update(avatarId, { $set: { name } });
    },
  }),
  selectGroup: new BaseMethod({
    allow: PermissionsMixin.LoggedIn,
    name: 'avatar.selectGroup',
    schema: new SimpleSchema({
      avatarId: String,
      group: String,
    }),
    run({ avatarId, group }) {
      Avatars.update(avatarId, { $set: { group } });
    },
  }),
  create: new BaseMethod({
    allow: PermissionsMixin.LoggedIn,
    name: 'avatar.create',
    run() {
      return Avatars.insert({ userId: this.userId });
    },
  }),

};
