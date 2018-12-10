import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import Stage from '../components/stage.jsx';

export const composer = ({ context, avatarId }, onData) => {
  const {
    Meteor,
    Collections: { Avatars },
  } = context();
  Meteor.subscribe('avatars.one.byId', avatarId);
  const avatar = Avatars.findOne(avatarId);
  if (avatar) {
    onData(null, { avatar });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  setShapePosition: actions.avatars.setShapePosition,
  setShapeRotation: actions.avatars.setShapeRotation,
  setShapebackface: actions.avatars.setShapebackface,
  copyAvatar: actions.avatars.copyAvatar,
  deleteAvatar: actions.avatars.deleteAvatar,
  saveAsSVG: actions.avatars.saveAsSVG,
});

const StageContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(Stage);

export default StageContainer;
