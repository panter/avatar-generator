import { setDefaults } from '@storybook/react-komposer';
import React from 'react';

export default setDefaults({
  pure: true,
  withRef: false,
  errorHandler: (error) => {
    throw error;
  },
  loadingHandler: () => <p>Loading</p>,
});
