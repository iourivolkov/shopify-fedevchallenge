import "./App.css";
import Heading from "./components/Heading";
import PastPrompts from "./components/PastPrompts";
import Prompt from "./components/Prompt";
import { useState } from "react";
import { axios } from "axios";

function App() {
  const [promptText, setPromptText] = useState("");

  const handlePromptTextChange = (e) => {
    setPromptText(e.target.value);
  };

  const submitPrompt = (e) => {
    e.preventDefault();
    const newPrompt = {
      question: promptText,
      // response -> res.data from api call
      response: response,
    };
    console.log(newPrompt);
  };

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
