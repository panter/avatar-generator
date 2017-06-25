import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import AllUsersAvatarsList from '../components/all_users_avatars_list.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const AllUsersAvatarsListContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AllUsersAvatarsList);

setComposerStub(AllUsersAvatarsListContainer, ({ }) => ({

}));

export default AllUsersAvatarsListContainer;
