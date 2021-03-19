import Layuot from "./components/Layout/Layout";
import SeedlingBuilder from "./components/Layout/SeedlingBuilder/SeedlingBuilder";
import "./App.css"
function App() {
  return (
    <div className="App">
     <Layuot>
     <SeedlingBuilder />
     </Layuot>
    </div>
  );
}

export default App;
