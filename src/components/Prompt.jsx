import { useState } from "react";

const Prompt = () => {
  return (
    <div className="prompt">
      {/* <label className="text-area-label" for="enter-prompt">
        Enter a prompt to begin:
      </label> */}
      <textarea
        rows="15"
        cols="60"
        id="enter-prompt"
        name="prompt"
        placeholder="Enter your prompt here.."
      />
      <div className="buttons">
        <button type="submit" className="send-prompt-button">
          submit
        </button>
      </div>
    </div>
  );
};

export default Prompt;
