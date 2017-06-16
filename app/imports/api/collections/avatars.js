

import { Mongo } from 'meteor/mongo';
import Schema from '../schemas/avatar';

const Avatars = new Mongo.Collection('avatars');
Avatars.attachSchema(Schema);
Avatars.getDefault = () => (
  Schema.clean({})
);

export default Avatars;
