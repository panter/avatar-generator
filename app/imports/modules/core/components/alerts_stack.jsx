import React from 'react';
import { AlertsStack as AlertsStackReact } from '@panter/manul-alerts';
import { withTheme } from 'styled-components';

const AlertsStack = withTheme(({ theme }) => (
  <AlertsStackReact
    styles={{ titleStyle: { color: theme.darkblue }, actionStyle: { color: theme.darkblue } }}
    stylesError={{ titleStyle: { color: theme.error } }}
  />
));


export default AlertsStack;
