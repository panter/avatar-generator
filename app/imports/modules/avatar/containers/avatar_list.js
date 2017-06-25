import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import AvatarList from '../components/avatar_list.jsx';

export const composer = ({ context, userId }, onData) => {
  const { Meteor, Collections: { Avatars } } = context();
  Meteor.subscribe('avatars.list.forUser', userId);
  const avatars = Avatars.find({ userId }).fetch();
  onData(null, { avatars });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const AvatarListContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AvatarList);

setComposerStub(AvatarListContainer, ({ }) => ({

}));

export default AvatarListContainer;
