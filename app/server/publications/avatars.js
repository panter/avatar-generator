import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


import { Avatars } from '/imports/api/collections';

export default () => {
  Meteor.publish('avatars.one.byId', function (avatarId) {
    check(avatarId, String);
    if (!this.userId) {
      this.ready();
      return;
    }
    if (!Avatars.findOne(avatarId)) {
      Avatars.insert({ _id: avatarId, userId: this.userId });
    }
    return Avatars.find(
      { _id: avatarId },
    );
  });
  Meteor.publish('avatars.list.forUser', function (userId) {
    check(userId, String);
    return Avatars.find(
      { userId },
    );
  });

  Meteor.publish('avatars.list.all', function () {
    return Avatars.find(
      { },
    );
  });
};
