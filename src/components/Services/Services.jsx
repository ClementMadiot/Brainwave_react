// cards
import SeCardEditing from "./SeCardEditing";
import SeCardSmartestAI from "./SeCardSmartestAI";
import SeCardVideo from "./SeCardVideo";
// components
import Heading from "../Heading";
import Section from "../Section";

const Services = () => {
  const classesCard =
    "relative border border-n-1/10 rounded-3xl overflow-hidden";
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <SeCardSmartestAI classesCard={classesCard} />

          <article className="relative z-1 grid gap-5 lg:grid-cols-2">
            <SeCardEditing/>
            <SeCardVideo/>
          </article>
        </div>
      </div>
    </Section>
  );
};

export default Services;
