import React from 'react';
import styled from 'styled-components';

import { getGroupColor } from '../../../configs/get_shape_color';
import AvatarSvg from '../containers/avatar_svg';
import LinkButton from '../../core/containers/link_button';
import UsernameLabel from '../../account/containers/username_label';

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
  color: ${p => getGroupColor(p.group)};

`;
const AvatarList = ({ avatars = [] }) => (
  <AvatarListBase>
    {avatars.map(
      avatar => <AvatarListItem key={avatar._id}>
        <AvatarListItemLink
          group={avatar.group}
          routeName="avatar" params={{ avatarId: avatar._id }}
        >
          <AvatarListSvg avatarId={avatar._id} />
          {avatar.name || avatar._id}
          <UsernameLabel userId={avatar.userId} />
        </AvatarListItemLink>
      </AvatarListItem>
    )}
  </AvatarListBase>
);

export default AvatarList;
