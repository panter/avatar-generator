import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Button from '../button';


storiesOf('core.Button', module)
  .addWithDoc('default view', Button,
  'This is the default view',
  () => (
    <Button onClick={action('click')} >Click me</Button>
    ));
