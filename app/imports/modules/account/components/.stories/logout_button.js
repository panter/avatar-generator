import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import LogoutButton from '../logout_button';


storiesOf('account.LogoutButton', module)
  .addWithDoc('default view', LogoutButton,
  'This is the default view',
  () => {
    return (
      <LogoutButton />
    );
  })
