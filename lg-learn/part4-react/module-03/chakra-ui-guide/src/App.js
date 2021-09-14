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

const LaGouButton = chakra('button', {
  themeKey: 'LaGouButton'
})

function App() {
  return <LaGouButton size='md' variant='danger'>btn</LaGouButton>
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
