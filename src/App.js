import "./App.css";
import Heading from "./components/Heading";
import PastPrompts from "./components/PastPrompts";
import Prompt from "./components/Prompt";
import { useState } from "react";
import axios from "axios";

function App() {
  const [promptText, setPromptText] = useState("");
  const [responseData, setResponseData] = useState("");
  const [isResponseGiven, setIsResponseGiven] = useState(false);

  const handlePromptTextChange = (e) => {
    setPromptText(e.target.value);
  };

  const submitPrompt = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      model: "text-curie-001",
      prompt: promptText,
      temperature: 0.4,
      max_tokens: 50,
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

    // @todo -> create function such that when you click the submit button, you save the input text to an array and then use that saved input to recall the prompt

    axios(config)
      .then((res) => {
        console.log(res.data);
        const aiResponseObject = {
          prompt: promptText,
          response: res.data.choices[0].text,
        };
        console.log(aiResponseObject);
        const response = res.data.choices[0].text;
        setResponseData(response);
        setIsResponseGiven(true);
        // currently prompt is set to promptText -> when textarea gets cleared, the prompt gets cleared as well
        setPromptText("");

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
      {isResponseGiven && (
        <PastPrompts response={responseData} prompt={promptText} />
      )}
    </div>
  );
}

export default App;
