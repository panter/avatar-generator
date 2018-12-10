import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';

const C = ({
  href, className, style, children, label, onClick, type, external,
}) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag target={external ? '_blank' : null} className={className} style={style} href={href} onClick={onClick} type={type}>
      {children || label}
    </Tag>
  );
};

const Button = styled(C)`
  padding: 8px 12px;
  margin: 10px;
  border-radius: 0px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: ${p => p.theme.primary};
  cursor: pointer;
`;

export default Button;
