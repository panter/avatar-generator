import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Confirm from '../confirm';


storiesOf('core.Confirm', module)
  .addWithDoc('default view', Confirm,
  'This is the default view',
  () => {
    return (
      <Confirm />
    );
  })
