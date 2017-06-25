import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const GroupSelectBase = styled.select`

`;

const GroupSelect = ({ avatarId, selectGroup, group }) => (
  <GroupSelectBase value={group} onChange={event => selectGroup({ avatarId, group: event.target.value })} >
    <option value="manul">Manul</option>
    <option value="gruppe2">Gruppe2</option>
    <option value="atlas">Atlas</option>
    <option value="lokomotive">Lokomotive</option>
  </GroupSelectBase>
);

export default GroupSelect;
