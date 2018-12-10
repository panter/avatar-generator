import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import MainLayout from '../components/main_layout.jsx';


export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const loggedIn = Boolean(Meteor.userId());
  const loggingIn = Meteor.loggingIn();
  onData(null, { loggedIn, loggingIn });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const MainLayoutContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(MainLayout);

export default MainLayoutContainer;
