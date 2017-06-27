import { Roles } from 'meteor/alanning:roles';

import { Avatars } from '../collections';


export default {
  write(avatarId, userId) {
    const itsMine = Avatars.findOne(avatarId).userId === userId;
    const isAdmin = Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
    return itsMine || isAdmin;
  },
  read(avatarId, userId) {
    return true;
  },
};
