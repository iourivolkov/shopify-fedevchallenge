import Card from "./Card";

const PastPrompts = ({ responseObj }) => {
  return (
    <div>
      <h3 className="heading-two">Responses</h3>
      <Card response={responseObj.response} prompt={responseObj.prompt} />
    </div>
  );
};

export default PastPrompts;
