/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import AlertsStack from './alerts_stack';
import mediaqueries from '../../../configs/mediaqueries';
import theme from '../../../configs/theme';
import Confirm from '../containers/confirm';

const LayoutBase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: auto;
  background-color: ${p => p.theme.background};
`;

const ContentWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: auto;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  ${mediaqueries.tablet`
    margin: auto;
  `}
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Layout = ({ loggedIn, loggingIn, propsLoggedIn = {}, propsNotLoggedIn = {}, ...propsDefault }) => {
  const propsLoginState = loggedIn ? propsLoggedIn : propsNotLoggedIn;
  const props = {
    ...propsDefault,
    ...propsLoginState,
  };
  const { showTitle = null, content = () => null } = props;
  return (
    <ThemeProvider theme={theme}>
      <LayoutBase>
        <ContentWrapper>
          {showTitle && (
            <div>
              <Title>Panter's lässigä Avatar Editor ™</Title>
              <p style={{ textAlign: 'center' }}>
                Powered by <img role="presentation" style={{ height: 40, verticalAlign: 'middle' }} src="https://images-na.ssl-images-amazon.com/images/I/41dvudsQOUL.jpg" />
              </p>
            </div>
          )}
          {content()}
        </ContentWrapper>
        <AlertsStack />
        <Confirm />
      </LayoutBase>
    </ThemeProvider>
  );
};

export default Layout;
