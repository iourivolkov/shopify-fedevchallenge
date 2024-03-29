import "./App.css";
import Heading from "./components/Heading";
import PastPrompts from "./components/PastPrompts";
import Prompt from "./components/Prompt";
import { useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [promptText, setPromptText] = useState("");
  const [responseData, setResponseData] = useState("");
  const [responseObject, setResponseObject] = useState({});
  const [isResponseGiven, setIsResponseGiven] = useState(false);
  const [promptArray, setPromptArray] = useState([]);

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

    axios(config)
      .then((res) => {
        const aiResponseObject = {
          id: res.data.id,
          prompt: promptText,
          response: res.data.choices[0].text,
        };
        console.log(aiResponseObject);

        setPromptArray((current) => [aiResponseObject, ...current]);
        console.log(promptArray);

        // aiResponseObject is not an array -> cant map over it
        // return promptArray?.map((item) => {
        //   <Card key={item.id} prompt={item.prompt} response={item.response} />;
        // });

        // once aiResponseObject is created, add this object to the array of prompts

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
      {promptArray?.map((item) => {
        <Card key={item.id} prompt={item.prompt} response={item.response} />;
      })}
      {isResponseGiven && <PastPrompts responseObj={responseObject} />}
    </div>
  );
}

export default App;
