import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

// <App key="a" />

ReactDOM.render(
  <App key="a" />,
  document.getElementById('root'),
  function () {
    console.log(this)
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
