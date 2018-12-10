import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import Button from './button';
import Modal from './modal';


const Confirm = ({
  onCancel,
  message,
  onConfirm,
  cancelButtonLabel = 'confirm.cancel',
  confirmButtonLabel = 'confirm.ok',
  testId = 'Confirm',
  showCancel = true,
}) => {
  const actions = [];
  if (showCancel) {
    actions.push(
      <Button key="cancel" onClick={onCancel}>
        <T>{cancelButtonLabel}</T>
      </Button>,
    );
  }
  actions.push(
    <Button key="ok" primary onClick={onConfirm}>
      <T>{confirmButtonLabel}</T>
    </Button>,
  );
  return (
    <Modal
      onHide={onCancel}
      show={Boolean(message)}
      small
      testId={testId}
      actions={actions}
    >
      <div>
        <p>{message}</p>
      </div>
    </Modal>
  );
};

Confirm.propTypes = {
};

Confirm.defaultProps = {
};


export default Confirm;
