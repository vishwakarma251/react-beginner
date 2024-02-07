import "./App.css";
import Parent from "./components/Parent";
import { Named } from "./components/Named";
import { ExportNameConcept } from "./components/Named";
function App() {
  return (
    <div className="App">
      <Parent />
      <Named />
      <ExportNameConcept />
    </div>
  );
}

export default App;
