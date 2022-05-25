const Prompt = () => {
  return (
    <div className="prompt">
      <h3 className="text-area-label">Enter a prompt:</h3>
      <textarea rows="15" cols="60">
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
