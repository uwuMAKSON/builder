import Layout from "./components/Layout/Layout" ;
import Toys from "./components/Toys/Toys" ;

import "./App.css" ;
const App =() =>{
  return (
    <div className="App">
      <Layout>
    <Toys/>

    </Layout>
    </div>
  );
}

export default App;