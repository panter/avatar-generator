import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import AvatarNameInput from '../avatar_name_input';


storiesOf('avatar.AvatarNameInput', module)
  .addWithDoc('default view', AvatarNameInput,
  'This is the default view',
  () => {
    return (
      <AvatarNameInput />
    );
  })
