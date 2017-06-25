import React from 'react';
import styled from 'styled-components';

import { Text } from '../../form-ui/components/fields/TextField';

const AvatarNameInputBase = styled.div`
  padding: 10px;
`;

const AvatarNameInput = ({ avatar, setAvatarName, avatarId }) => (
  <AvatarNameInputBase>
    <Text value={avatar.name} onChange={name => setAvatarName({ avatarId, name })} />
  </AvatarNameInputBase>
);

export default AvatarNameInput;
