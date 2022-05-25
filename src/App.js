import "./App.css";
import Heading from "./components/Heading";

function App() {
  const appName = "AI FUN";
  return (
    <div className="App">
      <Heading title={appName} />
    </div>
  );
}

export default App;
