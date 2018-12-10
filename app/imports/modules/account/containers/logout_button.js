import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

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

const LogoutButtonContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(LogoutButton);

export default LogoutButtonContainer;
