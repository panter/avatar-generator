import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import UsersEdit from '../users_edit';


storiesOf('admin.UsersEdit', module)
  .addWithInfo('default view', 'This is the default view', () => {
    return (
      <UsersEdit />
    );
  })
