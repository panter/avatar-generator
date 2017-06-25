import React from 'react';
import styled from 'styled-components';

import AvatarSvg from '../containers/avatar_svg';
import LinkButton from '../../core/containers/link_button';

const AvatarListBase = styled.ul`
  padding: 10px;
`;

const AvatarListSvg = styled(AvatarSvg)`
  width: 100px;
  height: 100px;
`;
const AvatarListItem = styled.li`

`;

const AvatarListItemLink = styled(LinkButton)`
  display: flex;
  flex-flow: row;
  align-items: center;

`;
const AvatarList = ({ avatars = [] }) => (
  <AvatarListBase>
    {avatars.map(
      avatar => <AvatarListItem key={avatar._id}>
        <AvatarListItemLink
          routeName="avatar" params={{ avatarId: avatar._id }}
        >
          <AvatarListSvg avatarId={avatar._id} />
          {avatar.name || avatar._id}</AvatarListItemLink>
      </AvatarListItem>
    )}
  </AvatarListBase>
);

export default AvatarList;
