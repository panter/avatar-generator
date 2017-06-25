export default {
  avatars: {
    setShapePosition({ Methods }, { avatarId, shapeId, x, y }) {
      return Methods.Avatars.setShapePosition.call({ avatarId, shapeId, x, y });
    },
    setShapeRotation({ Methods }, { avatarId, shapeId, rotation }) {
      Methods.Avatars.setShapeRotation.call({ avatarId, shapeId, rotation });
    },
    selectGroup({ Methods }, { avatarId, group }) {
      Methods.Avatars.selectGroup.call({ avatarId, group });
    },
  },
};
