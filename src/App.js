import Layuot from "./components/Layout/Layout";
import FruitBuilder from "./components/Layout/FruitBuilder/FruitBuilder";
import "./App.css"
function App() {
  return (
    <div className="App">
     <Layuot>
     <FruitBuilder />
     </Layuot>
    </div>
  );
}

export default App;
