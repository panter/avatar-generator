import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import UsernameLabel from '../username_label';


storiesOf('account.UsernameLabel', module)
  .addWithDoc('default view', UsernameLabel,
  'This is the default view',
  () => {
    return (
      <UsernameLabel />
    );
  })
