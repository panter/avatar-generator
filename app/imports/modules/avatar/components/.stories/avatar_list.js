import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AvatarList from '../avatar_list';


storiesOf('avatar.AvatarList', module)
  .addWithDoc('default view', AvatarList,
  'This is the default view',
  () => {
    return (
      <AvatarList />
    );
  })
