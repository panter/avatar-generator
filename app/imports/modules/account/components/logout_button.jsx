import React from 'react';
import styled from 'styled-components';

import Button from '../../core/components/button';

const LogoutButtonBase = styled(Button)`

`;

const LogoutButton = ({ logout }) => (
  <LogoutButtonBase onClick={logout}>
    Logout
  </LogoutButtonBase>
);

export default LogoutButton;
