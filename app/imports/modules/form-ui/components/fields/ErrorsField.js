import BaseField from 'uniforms/BaseField';
import React from 'react';
import filterDOMProps from 'uniforms/filterDOMProps';
import nothing from 'uniforms/nothing';

const ErrorsField = ({ children, ...props }, { uniforms: { error, schema } }) => !error && !children ? (
  nothing
) : (
  <div {...filterDOMProps(props)}>
    {children}

    <ul>
      {schema.getErrorMessages(error).map((message, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{message}</li>
      ))}
    </ul>
  </div>
);
ErrorsField.contextTypes = BaseField.contextTypes;

export default ErrorsField;
