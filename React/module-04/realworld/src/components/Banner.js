import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Banner(props) {
  const dispatch = useDispatch();
  const counterReducer = useSelector(state => state.counterReducer)
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{counterReducer.count}</h1>
        <p>A place to share your knowledge.</p>
        <button onClick={() => dispatch({type: 'increment'})}>button</button>
        <button onClick={() => dispatch({type: 'increment_async'})}>increment_async</button>
      </div>
    </div>
  );
}

export default Banner;