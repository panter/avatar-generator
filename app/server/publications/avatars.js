import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


import { Avatars } from '/imports/api/collections';

export default () => {
  Meteor.publish('avatars.one.byId', function (avatarId) {
    check(avatarId, String);
    if (!Avatars.findOne(avatarId)) {
      Avatars.insert({ _id: avatarId });
    }
    return Avatars.find(
      { _id: avatarId },
    );
  });
};
