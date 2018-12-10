import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import MyAvatarList from '../components/my_avatar_list.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();

  onData(null, { userId: Meteor.userId() });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const MyAvatarListContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(MyAvatarList);

export default MyAvatarListContainer;
