import React from 'react';

import Button from '../../core/components/button';

const CreateButtonBase = Button.extend`
`;

const CreateButton = ({ create }) => (
  <CreateButtonBase onClick={create}>
    Create new
  </CreateButtonBase>
);

export default CreateButton;
