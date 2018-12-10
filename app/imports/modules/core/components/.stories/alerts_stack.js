import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import AlertsStack from '../alerts_stack';


storiesOf('core.AlertsStack', module)
  .addWithDoc('default view', AlertsStack,
  'This is the default view',
  () => {
    return (
      <AlertsStack />
    );
  })
