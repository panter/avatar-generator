
import { Avatars } from '/imports/api/collections';
import BaseMethod from './lib/base_method';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';

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
      Avatars.update(avatarId, {
        $set: {
          [`${shapeId}.position`]: { x, y },
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
      Avatars.update(avatarId, {
        $set: {
          [`${shapeId}.rotation`]: rotation,
        },
      });
    },
  }),

};
