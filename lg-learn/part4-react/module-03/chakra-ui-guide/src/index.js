import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from'@chakra-ui/theme';
import { ChakraProvider, CSSReset } from '@chakra-ui/core'

// 1. 设置启动的模式
//theme.config.initialColorMode = 'dark';

// 2. 使用操作系统的模式
//theme.config.useSystemColorMode = true

console.log(theme)

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
