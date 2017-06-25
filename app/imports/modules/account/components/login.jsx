import React from 'react';
import styled from 'styled-components';

import Button from '../../core/components/button';
import Center from '../../core/components/center';

const LoginBase = styled.div`
`;
LoginBase.displayName = 'LoginBase';

const Login = ({ loginSchema, login }) => (
  <LoginBase>
    <Center>
      <Button onClick={login}>Login</Button>
    </Center>
  </LoginBase>
);

Login.propTypes = {
};

Login.defaultProps = {
};

Login.displayName = 'Login';

export default Login;
