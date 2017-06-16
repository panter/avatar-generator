import SimpleSchema from 'simpl-schema';

import { Avatars } from '/imports/api/collections';

import BaseMethod from './lib/base_method';
import collision from '../collision';

const checkCollisionAndMoveOthers = ({ avatarId, shapeId, x, y }) => {
  const avatar = Avatars.findOne(avatarId);

  Avatars.update(avatarId, {
    $set: {
      [`shapes.${shapeId}.position`]: { x, y },
    },
  });
  const collisions = collision({ avatarId, shapeId, newPosition: { x, y } });
  console.log(collisions);
  collisions.forEach((c) => {
    const movedPos = {
      x: avatar.shapes[c.shapeId].position.x + c.response.overlapV.x,
      y: avatar.shapes[c.shapeId].position.y + c.response.overlapV.y,
    };
    Avatars.update(avatarId, {
      $set: {
        [`shapes.${c.shapeId}.position`]: movedPos,
      },
    });
    // checkCollisionAndMoveOthers({ avatarId, shapeId: c.shapeId, ...movedPos });
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
      checkCollisionAndMoveOthers({ avatarId, shapeId, x, y });
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
      const { rotation: newRotation } = collision({ avatarId, shapeId, newRotation: rotation });
      Avatars.update(avatarId, {
        $set: {
          [`shapes.${shapeId}.rotation`]: newRotation,
        },
      });
    },
  }),

};
