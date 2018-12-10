import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import List from '../list';


storiesOf('admin.List', module)
  .addWithInfo('default view', 'This is the default view', () => {
    return (
      <List />
    );
  })
