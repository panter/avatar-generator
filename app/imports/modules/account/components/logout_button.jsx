import React from 'react';
import styled from 'styled-components';

import Button from '../../core/components/button';
import UsernameLabel from '../containers/username_label';

const LogoutButtonBase = styled(Button)`

`;

const LogoutButton = ({ logout, userId }) => (
  <LogoutButtonBase onClick={logout}>
    Logout <UsernameLabel userId={userId} />
  </LogoutButtonBase>
);

export default LogoutButton;
