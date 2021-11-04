import React from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from "react-redux"
import authReducer from '../store/reducers/auth.reducer';
import { navigate } from 'gatsby'

function Login(props) {

  const email = useInput("")
  const password = useInput("")
  const dispatch = useDispatch()

  const authReducer = useSelector(state => state.authReducer)

  function handleSubmit(e) {
    e.preventDefault()
    const emailValue = email.input.value
    const passwordValue = password.input.value
    dispatch({ type: 'login', payload: { user: { email: emailValue, password: passwordValue } } })
  }

  if (authReducer.success) {
    navigate('/')
    return null;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a>Have an account?</a>
            </p>
            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input {...email.input} className="form-control form-control-lg" type="text" placeholder="Email" />
              </fieldset>
              <fieldset className="form-group">
                <input {...password.input} className="form-control form-control-lg" type="password" placeholder="Password" />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;