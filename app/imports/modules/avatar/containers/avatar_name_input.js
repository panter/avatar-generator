import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import AvatarNameInput from '../components/avatar_name_input.jsx';

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
  setAvatarName: actions.avatars.setAvatarName,
});

const AvatarNameInputContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(AvatarNameInput);

export default AvatarNameInputContainer;
