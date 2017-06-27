import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Modal from '../modal';


storiesOf('core.Modal', module)
  .addWithDoc('default view', Modal,
  'This is the default view',
  () => {
    return (
      <Modal />
    );
  })
