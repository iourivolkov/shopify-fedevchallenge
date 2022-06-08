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

    const config = {
      params: {
        model: "text-curie-001",
        prompt: promptText,
        temperature: 0.3,
        max_tokens: 5,
      },
    };

    axios
      .post(`https://api.openai.com/v1/completions`, config)
      .then((res) => console.log(res.data));
  };

  const appName = "AI FUN";
  return (
    <div className="App">
      <Heading title={appName} />
      <Prompt
        text={promptText}
        submit={submitPrompt}
        enterText={handlePromptTextChange}
      />
      <PastPrompts />
    </div>
  );
}

export default App;
