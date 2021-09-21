import { Box, Container, Button, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`

const SignInAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  color: #FFFFFF;

  & > button {
    padding: 0 10px;
  }
  & > button:nth-of-type(1):after {
    content: '';
    width: 1px;
    height: 10px;
    background: #FFFFFF;
    position: absolute;
    right: 0;
    top: 21px;
  }
`

const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #FFFFFF;
  font-size: 20ox;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

export default function Heder () {
  return (
    <Box h={52} bgColor="#202020" borderBottom="1px solid #393939" position="relative">
      <Container h={52} maxW={1200}>
        <SignInAndJoin maxW={60}>
          <Button leftIcon={<FaSignInAlt />}>登录</Button>
          <Button leftIcon={<BsFillPersonFill />}>注册</Button>
        </SignInAndJoin>
        <Image src="/images/logo.png" css={logo}/>
        <Search>
          <FaSearch />
        </Search>
      </Container>
    </Box>
  );

}