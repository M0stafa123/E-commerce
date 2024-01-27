import Header from "./Header";
import Nav from "./Nav";
import Card from "../Card";

const Section = ({ name, title, timer }) => {
  return (
    <div className="flex flex-col  my-5">
      <Header title={title} />
      <Nav name={name} timer={timer} />
      <main className="slider scroll-smooth flex gap-4 touch-pan-y select-none  overflow-x-auto py-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default Section;
