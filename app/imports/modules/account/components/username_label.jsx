import React from 'react';
import styled from 'styled-components';

import { getGroupColor } from '../../../configs/get_shape_color';

const UsernameLabelBase = styled.span`
  font-size: 14px;
  padding: 2px;
  margin: 4px;
  border: 1px solid;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  background-color: ${p => getGroupColor(p.group)};
  color: white;
`;

const UserPicture = styled.img`
  height: 20px;
  margin-right: 10px;
`;
const UsernameLabel = ({ picture, username, group }) => (
  <UsernameLabelBase group={group}>
    {picture && <UserPicture src={picture} />}
    {username}
  </UsernameLabelBase>
);

export default UsernameLabel;
