import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import UsernameLabel from '../components/username_label.jsx';
import { getOr } from 'lodash/fp';

export const composer = ({ context, userId }, onData) => {
  const { Meteor, Collections: { Users } } = context();
  Meteor.subscribe('users.one.public', userId);
  const user = Users.findOne(userId);
  const username = getOr(userId, 'services.google.name', user);
  onData(null, { username });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const UsernameLabelContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsernameLabel);

setComposerStub(UsernameLabelContainer, ({ }) => ({

}));

export default UsernameLabelContainer;
