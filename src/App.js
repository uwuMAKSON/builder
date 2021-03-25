import Layout from "./components/Layout/Layout";
import FruitBuilder from "./components/Layout/FruitBuilder/FruitBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <FruitBuilder />
      </Layout>
    </div>
  );
}

export default App;