import { Fragment } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <Fragment>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
