const Prompt = ({ submit, enterText, text }) => {
  return (
    <div className="prompt">
      <form onSubmit={submit}>
        <textarea
          rows="15"
          cols="60"
          id="enter-prompt"
          name="prompt"
          placeholder="Enter your prompt here.."
          onChange={enterText}
          value={text}
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
