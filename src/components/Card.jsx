const Card = ({ prompt, response }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="prompt-data">
          <div className="card-prompt">Prompt:</div>
          <div className="card-prompt-prev"></div>
        </div>
        <div className="response-data">
          <div className="card-response">Response:</div>
          <div className="card-reponse-prev">{response}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
