import React, { Component } from 'react';
import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';

import GlobalStyle from '../theme/globalStyle';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 40vmin;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const AppIntro = styled.p`
  code {
    font-size: 1.3rem;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppIntro>Edit <code>src/App.js</code> and save to reload.</AppIntro>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppWrapper>
    );
  }
}

export default App;
