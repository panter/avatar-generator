import { composeAll } from '@storybook/react-komposer';
import { useDeps } from '@storybook/mantra-core';
import composeWithTracker from './composeWithTracker';
import compose from './compose';

export {
  compose, composeWithTracker, useDeps, composeAll,
};
