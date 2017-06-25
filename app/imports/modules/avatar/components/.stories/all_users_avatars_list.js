import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AllUsersAvatarsList from '../all_users_avatars_list';


storiesOf('avatar.AllUsersAvatarsList', module)
  .addWithDoc('default view', AllUsersAvatarsList,
  'This is the default view',
  () => {
    return (
      <AllUsersAvatarsList />
    );
  })
