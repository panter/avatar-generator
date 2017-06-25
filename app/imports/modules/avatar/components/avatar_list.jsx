import React from 'react';
import styled from 'styled-components';

import LinkButton from '../../core/containers/link_button';

const AvatarListBase = styled.ul`
  padding: 10px;
`;

const AvatarListItem = styled.li`
`;

const AvatarListItemLink = styled(LinkButton)`
  display: block;
`;
const AvatarList = ({ avatars = [] }) => (
  <AvatarListBase>
    {avatars.map(
      avatar => <AvatarListItem key={avatar._id}>
        <AvatarListItemLink routeName="avatar" params={{ avatarId: avatar._id }} >{avatar.name || avatar._id}</AvatarListItemLink>
      </AvatarListItem>
    )}
  </AvatarListBase>
);

export default AvatarList;
