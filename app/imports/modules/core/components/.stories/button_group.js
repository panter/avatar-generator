import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ButtonGroup from '../button_group';


storiesOf('core.ButtonGroup', module)
  .addWithDoc('default view', ButtonGroup,
  'This is the default view',
  () => {
    return (
      <ButtonGroup />
    );
  })
