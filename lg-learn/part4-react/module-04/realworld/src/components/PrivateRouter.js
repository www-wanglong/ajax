import React from 'react';
import useLogin from '../hooks/useLogin'
import { navigate } from 'gatsby'

function PrivateRouter({ component: Component, ...rest }) {
  const [isLogin, loading] = useLogin()
  console.log(isLogin, loading)
  if (loading) {
    return null
  }
  if (isLogin) {
    console.log(999)
    return <Component {...rest} />
  }
  navigate('/login')
  return null
}

export default PrivateRouter;