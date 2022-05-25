const Card = ({ prompt, response }) => {
  return (
    <div className="card">
      <div className="prompt-data">
        <div className="card-prompt">Prompt:</div>
        <div className="card-prompt-prev">{prompt}</div>
      </div>
      <div className="response-data">
        <div className="card-response">Response:</div>
        <div className="card-reponse-prev">{response}</div>
      </div>
    </div>
  );
};

export default Card;
