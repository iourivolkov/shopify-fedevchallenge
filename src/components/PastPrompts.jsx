import Card from "./Card";

const PastPrompts = ({ response, prompt }) => {
  return (
    <div>
      <h3 className="heading-two">Responses</h3>
      <Card response={response} prompt={prompt} />
    </div>
  );
};

export default PastPrompts;
