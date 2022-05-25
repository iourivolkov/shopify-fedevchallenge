const Card = ({ prompt, response }) => {
  return (
    <div className="card">
      <div className="card-prompt">Prompt: {prompt}</div>
      <div className="card-response">Response: {response}</div>
    </div>
  );
};

export default Card;
