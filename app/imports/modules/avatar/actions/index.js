export default {
  avatars: {
    setShapePosition({ Methods }, { avatarId, shapeId, x, y }) {
      Methods.Avatars.setShapePosition.call({ avatarId, shapeId, x, y });
    },
    setShapeRotation({ Methods }, { avatarId, shapeId, rotation }) {
      Methods.Avatars.setShapeRotation.call({ avatarId, shapeId, rotation });
    },
  },
};
