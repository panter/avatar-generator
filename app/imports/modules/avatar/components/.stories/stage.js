import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Stage from '../stage';


storiesOf('avatar.Stage', module)
  .addWithDoc('default view', Stage,
  'This is the default view',
  () => {
    return (
      <Stage />
    );
  })
