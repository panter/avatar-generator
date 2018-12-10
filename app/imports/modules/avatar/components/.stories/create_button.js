import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import CreateButton from '../create_button';


storiesOf('avatar.CreateButton', module)
  .addWithDoc('default view', CreateButton,
  'This is the default view',
  () => {
    return (
      <CreateButton />
    );
  })
