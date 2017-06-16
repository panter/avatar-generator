import '../client/main.scss';

import { disable, setStubbingMode } from 'react-komposer';

import { ThemeProvider } from 'styled-components';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import React from 'react';
import addWithDoc from 'storybook-addon-props';
import theme from '../imports/configs/theme';

addDecorator(({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
));
setAddon(addWithDoc);
setStubbingMode();
disable();

function loadStories() {
  require('../imports/modules/avatar/components/.stories/index.js');
  require('../imports/modules/account/components/.stories/index.js');
  require('../imports/modules/registration/components/.stories/index.js');
  // require as many as stories you need.
  require('../imports/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
