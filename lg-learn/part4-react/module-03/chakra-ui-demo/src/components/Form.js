import React from "react";
import {
  Tab,
  TabList,
  Tabs,
  Box,
  TabPanel,
  TabPanels,
  Image,
  useColorModeValue
} from '@chakra-ui/core'
import SignIn from './SignIn';
import SignUp from './SignUp';

import chakraUILight from '../assets/images/chakra-ui-light.png'
import chakraUIDark from '../assets/images/chakra-ui-dark.png'

export default function Form() {
  /**
   * 根据主题色 改变颜色
   */
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const chakraUI = useColorModeValue(chakraUILight, chakraUIDark)
  return (
    <Box bgColor={bgColor} p={3} w="100%" boxShadow="lg" borderRadius="lg">
      <Image w="250px" mx="auto" mt="2" mb="6" src={chakraUI} />
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{boxShadow: 'none'}}>注册</Tab>
          <Tab _focus={{boxShadow: 'none'}}>登录</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <SignIn />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
