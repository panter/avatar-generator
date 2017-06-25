import { Meteor } from 'meteor/meteor';

export default () => {
  Meteor.publish(null, function () {
    return Meteor.users.find(this.userId, { fields: { 'services.google.name': 1, profile: 1 } });
  });
};
