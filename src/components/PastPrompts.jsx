import Card from "./Card";

const PastPrompts = ({ response }) => {
  const prompt = "Write a review about the best drinks bar in Toronto..";

  return (
    <div>
      <h3 className="heading-two">Responses</h3>
      <Card response={response} />
    </div>
  );
};

export default PastPrompts;
