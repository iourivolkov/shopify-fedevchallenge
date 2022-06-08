const Card = ({ prompt, responseData }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="prompt-data">
          <div className="card-prompt">Prompt:</div>
          <div className="card-prompt-prev">{prompt}</div>
        </div>
        <div className="response-data">
          <div className="card-response">Response:</div>
          <div className="card-reponse-prev">
            {responseData.choices[0].text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
