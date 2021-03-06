import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}

body::-webkit-scrollbar-track{
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mainBg};
}

body::-webkit-scrollbar{
  width: 10px;
  background-color: ${({ theme }) => theme.colors.mainBg};
}

body::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background-color: ${({ theme }) => `${theme.colors.primary}`};
}

#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>how i met your quiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
