import Button from "./Button";
import Section from "./Section";
import { check } from "../assets";
import { collabContent, collabText } from "../constant";
import CollabCircle from "./CollabCircle";


const Collaboration = () => {
  return (
    <Section crosses>
      <section className="container lg:flex">
        <article className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14 ">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button className="z-50 bg-n-8">Try it now</Button>
        </article>

        <article className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 text-n-4 mb-12 md:mb-16 lg:mb-28 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
            <CollabCircle/>          
        </article>
      </section>
    </Section>
  );
};

export default Collaboration;
