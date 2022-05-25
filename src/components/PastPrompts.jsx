import Card from "./Card";

const PastPrompts = () => {
  const prompt = "Write a review about the best drinks bar in Toronto..";

  const response =
    "The best place for drinks in Toronto is a french restaurant called 'le banane' located on Ossington Ave..";
  return (
    <div>
      <h3 className="heading-two">Responses</h3>
      <Card prompt={prompt} response={response} />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default PastPrompts;
