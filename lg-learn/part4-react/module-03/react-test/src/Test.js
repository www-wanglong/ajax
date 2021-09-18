import React, { useEffect } from 'react';

function Test () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行')
    }, 1000)

    return () => clearInterval(timer)
  }, []);

  return <div>test</div>
};

export default Test;