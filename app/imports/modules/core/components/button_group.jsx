
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const ButtonGroup = styled.div`
  margin-left: -5px;
  margin-right: -5px;
  display: flex;
  overflow: visible;
  justify-content: ${p => p.children.length > 1 ? 'space-between' : 'center'};
  flex-flow: row wrap;
  & > * {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
  }

`;

ButtonGroup.propTypes = {
};

ButtonGroup.defaultProps = {
};


export default ButtonGroup;
