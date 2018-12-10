import { Modal as ReactModal } from 'react-overlays';
import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import ButtonGroup from './button_group';

const baseStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const backdropStyle = {
  ...baseStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5,
};

const ModalDialog = styled.div`
  position: absolute;
  width: 100%;
  max-width: ${p => (p.small ? '450px' : '80%')};
  max-height: 100vh;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 15px;
  ${p => p.theme.fontDefault}
`;

const ModalActions = styled(ButtonGroup)`
  margin-top: 40px;
  margin-bottom: -10px;
`;

const Modal = ({
  show, onHide, children, small, actions = [], testId,
}) => (
  <ReactModal aria-labelledby="modal-label" style={baseStyle} backdropStyle={backdropStyle} show={show} onHide={onHide}>
    <ModalDialog small={small}>
      <div>{children}</div>
      <ModalActions>{actions}</ModalActions>
    </ModalDialog>
  </ReactModal>
);

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
