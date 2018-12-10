import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import AvatarSvg from '../components/avatar_svg.jsx';

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
});

const AvatarSvgContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(AvatarSvg);

export default AvatarSvgContainer;
