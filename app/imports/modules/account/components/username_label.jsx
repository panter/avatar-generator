import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const UsernameLabelBase = styled.div`
  font-size: 14px;
  padding: 2px;
  margin: 4px;
  border: 1px solid;
  border-radius: 4px;
`;

const UsernameLabel = ({ username }) => (
  <UsernameLabelBase>
    {username}
  </UsernameLabelBase>
);

export default UsernameLabel;
