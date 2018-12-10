import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import UsernameLabel from '../components/username_label.jsx';
import { getOr, get } from 'lodash/fp';

export const composer = ({ context, userId }, onData) => {
  const {
    Meteor,
    Collections: { Users },
  } = context();
  Meteor.subscribe('users.one.public', userId);
  const user = Users.findOne(userId);
  // fallbacks: name --> email --> userid
  const username = getOr(getOr(userId, 'services.google.email', user), 'services.google.name', user);
  const picture = get('services.google.picture', user);
  onData(null, { picture, username });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const UsernameLabelContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(UsernameLabel);

export default UsernameLabelContainer;
