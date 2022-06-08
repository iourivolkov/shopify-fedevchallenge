import "./App.css";
import Heading from "./components/Heading";
import PastPrompts from "./components/PastPrompts";
import Prompt from "./components/Prompt";
import { useState } from "react";
import axios from "axios";

function App() {
  const [promptText, setPromptText] = useState("");

  const handlePromptTextChange = (e) => {
    setPromptText(e.target.value);
  };

  const submitPrompt = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      model: "text-curie-001",
      prompt: promptText,
      temperature: 0.8,
    });

    const config = {
      method: "post",
      url: "https://api.openai.com/v1/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
