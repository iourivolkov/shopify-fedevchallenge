import "./App.css";
import Heading from "./components/Heading";
import PastPrompts from "./components/PastPrompts";
import Prompt from "./components/Prompt";
import { useState } from "react";
import axios from "axios";

function App() {
  const [promptText, setPromptText] = useState("");
  const [responseData, setResponseData] = useState("");

  const handlePromptTextChange = (e) => {
    setPromptText(e.target.value);
  };

  const submitPrompt = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      model: "text-curie-001",
      prompt: promptText,
      temperature: 0.4,
    });

    const apiKey = process.env.REACT_APP_API_KEY;

    const config = {
      method: "post",
      url: "https://api.openai.com/v1/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        const response = res.data.choices[0].text;
        setResponseData(response);
        console.log(responseData);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("ERROR!", err.message);
        }
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
      {/* <PastPrompts responseData={response} /> */}
    </div>
  );
}

export default App;
