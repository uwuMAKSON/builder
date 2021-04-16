import Layout from "./components/Layout/Layout";
import Toys from "./components/Layout/Toys/Toys";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Toys} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;