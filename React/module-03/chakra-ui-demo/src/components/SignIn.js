import React from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  FormHelperText,
  Flex,
  Button,
  FormControl,
} from '@chakra-ui/core';
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'

export default function SignIn() {
  return (
    <form>
      <Stack spacing="2">

        <FormControl isDisabled isInvalid>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="请输入名字" />
          </InputGroup>
          <FormHelperText>用户名必填</FormHelperText>
        </FormControl>


        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" placeholder="请输入密码" />
          <InputRightAddon children={<FaCheck />}  />
        </InputGroup>

        <Button _hover={{bgColor: 'tomato'}} w="100%" colorScheme="teal">登录</Button>
      </Stack>
    </form>
  );
};
