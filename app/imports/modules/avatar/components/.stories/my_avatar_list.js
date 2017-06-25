import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MyAvatarList from '../my_avatar_list';


storiesOf('avatar.MyAvatarList', module)
  .addWithDoc('default view', MyAvatarList,
  'This is the default view',
  () => {
    return (
      <MyAvatarList />
    );
  })
