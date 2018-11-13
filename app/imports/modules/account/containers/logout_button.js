import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import LogoutButton from '../components/logout_button.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  const userId = Meteor.userId();
  onData(null, { userId });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  logout: actions.account.logout,
});

const LogoutButtonContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LogoutButton);

setComposerStub(LogoutButtonContainer, ({ }) => ({

}));

export default LogoutButtonContainer;
