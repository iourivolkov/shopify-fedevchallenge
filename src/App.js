import "./App.css";
import Heading from "./components/Heading";
import Prompt from "./components/Prompt";

function App() {
  const appName = "AI FUN";
  return (
    <div className="App">
      <Heading title={appName} />
      <Prompt />
    </div>
  );
}

export default App;
