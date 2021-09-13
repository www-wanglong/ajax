import React from 'react';
import {
  Button,
  Box,
  useColorMode,
  Text,
  useColorModeValue,
  LightMode,
  chakra,
} from '@chakra-ui/core';

const WLButton=  chakra("button", {
  baseStyle: {
    borderRadius: 'lg'
  },
  sizes: {
    sm: {
      px: '3',
      py: '1',
      fontSize: '12px',
    },
    md: {
      px: '4',
      py: '2',
      fontSize: '14px',
    }
  },
  variants: {
    primary: {
      bgColor: 'blue.500',
      color: 'white'
    },
    danger: {
      bgColor: 'red.500',
      color: 'white'
    }
  }
})

WLButton.defaultProps = {
  size: 'sm',
  variant: 'primary'
}


function App() {
  return <WLButton size='md' variant='danger'>btn</WLButton>
  // 主题色
  const [colorMode, toggleColorMode] = useColorMode();

  const bgColor = useColorModeValue('tomato', 'skyblue')

  return (
    <Box mb="5" w={['100px', '300px', '500px', '1000px']} h="200px" bgColor="red.500">
      <Text>当前颜色模式{colorMode}</Text>
      <LightMode>
        <Button onClick={toggleColorMode}>切换</Button>
      </LightMode>
    </Box>
  );
}

export default App;
