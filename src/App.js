import "./App.css";
import Presentation from "./components/presentation";
import Aboutme from "./components/aboutme";
import Proyects from "./components/proyects";
import Contactme from "./components/contactme";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Presentation />
      <Aboutme />
      <Proyects />
      <Contactme />
      
    </div>
  );
}

export default App;
