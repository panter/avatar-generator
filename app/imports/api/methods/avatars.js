import SimpleSchema from 'simpl-schema';

import { Avatars } from '/imports/api/collections';

import BaseMethod from './lib/base_method';
import collision from '../collision';

const checkCollisionAndMoveOthers = ({ avatarId, shapeId, newPosition = null, newRotation = null, blackList = [] }) => {
  const avatar = Avatars.findOne(avatarId);
  const shape = avatar.shapes[shapeId];
  if (newPosition !== null) {
    Avatars.update(avatarId, {
      $set: {
        [`shapes.${shapeId}.position`]: newPosition,
      },
    });
  }
  if (newRotation !== null) {
    Avatars.update(avatarId, {
      $set: {
        [`shapes.${shapeId}.rotation`]: newRotation,
      },
    });
  }
  const collisions = collision({ avatarId, shapeId, newPosition, newRotation, blackList });
  collisions.forEach((c) => {
    const movedPos = {
      x: avatar.shapes[c.shapeId].position.x + c.response.overlapV.x,
      y: avatar.shapes[c.shapeId].position.y + c.response.overlapV.y,
    };
    // todo checki movedPos is near the current shape corners
  //  const corners = shape.points.map

    checkCollisionAndMoveOthers({
      avatarId,
      shapeId: c.shapeId,
      newPosition: movedPos,
      blackList: [shapeId, ...blackList],
    });
  });
};
export default {
  setShapePosition: new BaseMethod({
    allow: true,
    name: 'avatar.setShapePosition',
    schema: new SimpleSchema({
      avatarId: String,
      shapeId: String,
      x: Number,
      y: Number,
    }),
    run({ avatarId, shapeId, x, y }) {
      checkCollisionAndMoveOthers({ avatarId, shapeId, newPosition: { x, y } });
    },
  }),
  setShapeRotation: new BaseMethod({
    allow: true,
    name: 'avatar.setShapeRotation',
    schema: new SimpleSchema({
      avatarId: String,
      shapeId: String,
      rotation: Number,
    }),
    run({ avatarId, shapeId, rotation }) {
      checkCollisionAndMoveOthers({ avatarId, shapeId, newRotation: rotation });
    },
  }),
  selectGroup: new BaseMethod({
    allow: true,
    name: 'avatar.selectGroup',
    schema: new SimpleSchema({
      avatarId: String,
      group: String,
    }),
    run({ avatarId, group }) {
      Avatars.update(avatarId, { $set: { group } });
    },
  }),

};
