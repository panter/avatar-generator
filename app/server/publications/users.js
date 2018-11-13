import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default () => {
  const publicFields = {
    'services.google.name': 1,
    'services.google.email': 1,
    'services.google.picture': 1,
    profile: 1,
  };
  Meteor.publish(null, function () {
    if (!this.userId) {
      this.ready();
      return;
    }
    return Meteor.users.find(this.userId, {
      fields: publicFields,
    });
  });

  Meteor.publish('users.one.public', function (userId) {
    if (!this.userId) {
      this.ready();
      return;
    }
    check(userId, String);
    return Meteor.users.find(userId, { fields: publicFields });
  });
};
