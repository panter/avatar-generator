import React from 'react';
import styled from 'styled-components';

import AvatarList from '../containers/avatar_list';

const MyAvatarListBase = styled.div`

`;

const MyAvatarList = ({ userId }) => (
  <MyAvatarListBase>
    <p>Deine Avatars: </p>
    <AvatarList userId={userId} />
  </MyAvatarListBase>
);

export default MyAvatarList;
