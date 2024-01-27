import Section from "./Section";
import Categories from "./Categories";
import Services from "./Services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {
  useGSAP(() => {
    gsap.fromTo("article", { opacity: 0 }, { opacity: 1, duration: 1 });
  });
  return (
    <article className=" flex flex-col gap-5">
      <div className="flex flex-col pb-5">
        <Section name={`Flash Sales`} timer={true} title={`Today’s`} />
        <button className="bg-[#DB4444] rounded-lg hover:bg-[#482f2f] self-center text-white px-3 py-2">
          View All Products
        </button>
      </div>
      <hr />
      <Categories title={`Categories`} name={`Browse By Category`} timer={false} />
      <hr />
      <Section name={`Best Selling Products`} timer={false} title={`This Month`} />
      <hr />
      <Section name={`Explore Our Products`} timer={false} title={`Our Products`} />
      <hr />
      <Services />
    </article>
  );
};

export default Home;
