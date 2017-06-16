import SimpleSchema from 'simpl-schema';

const Position = new SimpleSchema({
  x: Number,
  y: Number,
});

const Shape = new SimpleSchema({
  position: Position,
  rotation: Number,
});

const defaultValue = {
  position: {
    x: 0, y: 0,
  },
  rotation: 0,
};


export default new SimpleSchema({
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
