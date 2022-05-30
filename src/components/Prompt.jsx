import { useState } from "react";

const Prompt = () => {
  const [promptText, setPromptText] = useState("");

  const handlePromptTextChange = (e) => {
    setPromptText(e.target.value);
  };

  return (
    <div className="prompt">
      <form>
        {/* <label className="text-area-label" for="enter-prompt">
        Enter a prompt to begin:
      </label> */}
        <textarea
          rows="15"
          cols="60"
          id="enter-prompt"
          name="prompt"
          placeholder="Enter your prompt here.."
          onChange={handlePromptTextChange}
          value={promptText}
        />
        <div className="buttons">
          <button type="submit" className="send-prompt-button">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Prompt;
