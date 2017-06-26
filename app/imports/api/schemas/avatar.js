import SimpleSchema from 'simpl-schema';

const Position = new SimpleSchema({
  x: Number,
  y: Number,
});

const Shape = new SimpleSchema({
  position: Position,
  rotation: Number,
  backface: {
    type: Boolean,
    optional: true,
  },
});

const defaultValue = {
  position: {
    x: 300, y: 300,
  },
  rotation: 0,
  backface: false,
};

const Shapes = new SimpleSchema({
  ta1: {
    type: Shape,
    defaultValue,
  },
  ta2: {
    type: Shape,
    defaultValue,
  },
  tb1: {
    type: Shape,
    defaultValue,
  },
  tb2: {
    type: Shape,
    defaultValue,
  },
  tc: {
    type: Shape,
    defaultValue,
  },
  r: {
    type: Shape,
    defaultValue,
  },
  d: {
    type: Shape,
    defaultValue,
  },

});

export default new SimpleSchema({
  userId: String,
  shapes: Shapes,
  group: {
    type: String,
    defaultValue: 'atlas',
  },
  name: {
    type: String,
    optional: true,
    defaultValue: 'Unnamed avatar',
  },
});
