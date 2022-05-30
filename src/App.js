import "./App.css";
import Heading from "./components/Heading";
import PastPrompts from "./components/PastPrompts";
import Prompt from "./components/Prompt";
import { useState } from "react";

function App() {
  const appName = "AI FUN";
  return (
    <div className="App">
      <Heading title={appName} />
      <Prompt text={prompt} />
      <PastPrompts />
    </div>
  );
}

export default App;
