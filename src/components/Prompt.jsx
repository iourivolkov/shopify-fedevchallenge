const Prompt = ({ submit, enterText, text }) => {
  // const [promptText, setPromptText] = useState("");

  // const response = () => {
  //   axios.get().then((res) => {
  //     console.log("response ", res);
  //   });
  // };

  // const handlePromptTextChange = (e) => {
  //   setPromptText(e.target.value);
  // };

  // const submitPrompt = (e) => {
  //   e.preventDefault();
  //   const newPrompt = {
  //     question: promptText,
  //     response: response,
  //   };
  //   console.log(newPrompt);
  // };

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
          onChange={enterText}
          value={text}
        />
        <div className="buttons">
          <button onClick={submit} type="submit" className="send-prompt-button">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Prompt;
