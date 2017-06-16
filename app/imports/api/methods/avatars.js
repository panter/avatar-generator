import SimpleSchema from 'simpl-schema';

import { Avatars } from '/imports/api/collections';

import BaseMethod from './lib/base_method';
import collision from '../collision';

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
      const { position } = collision({ avatarId, shapeId, newPosition: { x, y } });
      Avatars.update(avatarId, {
        $set: {
          [`shapes.${shapeId}.position`]: position,
        },
      });
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
