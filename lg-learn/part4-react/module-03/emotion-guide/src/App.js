import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming'

// 使用主题色
const primaryColor = props => css`
  color: ${props.colors.primary}
`;

const styles = css`
  body {
    margin: 0;
  }
  a {
    color: red;
  }
`;

// 动画使用
const move = keyframes`
  0% {
    background: skyblud;
    left: 0;
    top: 0;
  }
  100% {
    background: tomato;
    left: 600px;
    top: 300px;
  }
`;


const box = css`
  width: 100px;
  height: 100px;
  position: absolute;
  animation: ${move} 2s ease infinite alternate
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: ${ props => props.bgColor || 'skyblue' }
`;

// css选择器 &
const Container =  styled.div`
  width: 100px;
  height: 1000px;
  background: skyblue;
  &:hover {
    background: pink;
  }
  & > span {
    color: yellow;
  }
`;

const Container1 = styled.div({
  width: 1000,
  background: 'pink',
  margin: '0 auto',
});

// 为组件添加默认的样式
const Demo = ({ className }) => <div className={className}>Demo</div>;

const Fancy = styled(Demo)`
  color: red;
`
const Fancy2 = styled(Demo)({
  background: 'tomato'
})

// const Child = styled.div`
//   color: red;
// `

// const Parent = styled.div`
//   ${Child} {
//     color: green
//   }
// `

// 通过父组件设置子组件的样式
const Child = styled.div({
  color: 'red'
});

const Parent = styled.div({
  [Child]: {
    color: 'yellow'
  }
});

function App() {

  console.log(useTheme())
  return <div css={primaryColor}>dev</div>

  return <div css={box}></div>

  return <div>
    <Global styles={styles}></Global>
    <Container>
      <span>hehe</span>
      <Button as="a" bgColor="red">button</Button>
      <Fancy2></Fancy2>
      <Child>child</Child>
      <Parent><Child>Parent child</Child></Parent>
    </Container>
  </div>;
}

export default App;

