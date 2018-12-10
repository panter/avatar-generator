import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import GroupSelect from '../group_select';


storiesOf('avatar.GroupSelect', module)
  .addWithDoc('default view', GroupSelect,
  'This is the default view',
  () => {
    return (
      <GroupSelect />
    );
  })
