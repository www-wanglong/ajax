import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<div>helo</div>, document.getElementById("root"), function () {
  console.log(this, "callback")
})
