const Prompt = () => {
  return (
    <div className="prompt">
      <label className="text-area-label" for="enter-prompt">
        Enter a prompt to begin:
      </label>
      <textarea rows="15" cols="60" id="enter-prompt">
        Write a yelp review about the best Taco..
      </textarea>
      <div className="buttons">
        <button type="submit" className="send-prompt-button">
          submit
        </button>
        <button type="submit" className="reset-prompt-button">
          reset
        </button>
      </div>
    </div>
  );
};

export default Prompt;
