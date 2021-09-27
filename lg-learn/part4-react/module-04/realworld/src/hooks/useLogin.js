import { useState, useEffect } from 'react'
import axios from 'axios'

function  useLogin(params) {
  const [status, setStatus] = useState([false, true])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      (
        async function() {
          try {
            // axios.get('user', {
            //   headers: {

            //   }
            // })
            setStatus([true, false])
          } catch (e) {
            setStatus([false, false])
          }
        }
      )()
    } else {
      setStatus([false, false])
    }
  }, [])

  return status;
}

export default useLogin;