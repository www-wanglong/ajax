import React from "react";
import {
  Box,
  Image,
  Badge,
  Stack,
  Text,
  Flex,
  Button,
  useColorModeValue
} from "@chakra-ui/core";
import chakraUI from "../assets/images/chakra-ui.png";
import { AiFillStar } from "react-icons/ai";

export default function Card() {
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.500', 'gray.200')

  return (
    <Box
      bgColor={bgColor}
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
    >
      <Image src={chakraUI} />
      <Box p={3}>
        <Stack direction="horizontal" align="center">
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">New</Badge>
          <Badge>React</Badge>
          <Badge>Chakra-UI</Badge>
          <Text>精品</Text>
        </Stack>
        <Text fontSize="xl" pt={3} pb={2} color={textColor} as="h3" fontWeight="semibold">Chakra专属</Text>
        <Text lineHeight="tall" fontSize="sm" fontWeight="light">嘻嘻</Text>
        <Flex align="center" mt={2}>
          <Flex color='teal.500'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Flex>
          <AiFillStar />
          <Text ml={1}>100条评论</Text>
        </Flex>

      </Box>

      <Button w="100%" colorScheme="teal">登录</Button>
    </Box>
  );
};
