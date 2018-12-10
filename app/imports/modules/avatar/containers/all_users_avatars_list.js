import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import AvatarsList from '../components/avatar_list.jsx';

export const composer = ({ context, excludeMine }, onData) => {
  const {
    Meteor,
    Collections: { Avatars },
  } = context();
  Meteor.subscribe('avatars.list.all');
  const selector = excludeMine ? { userId: { $ne: Meteor.userId() } } : {};
  const avatars = Avatars.find(selector).fetch();
  onData(null, { avatars });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const AllUsersAvatarsListContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(AvatarsList);

export default AllUsersAvatarsListContainer;
