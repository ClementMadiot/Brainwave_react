
import { check, service1 } from "../../assets";
import { brainwaveServices } from "../../constant";
import Heading from "../Heading";
import Section from "../Section";
import SeCardSmartestAI from "./SeCardSmartestAI";


const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Generative AI made for creators." text="Brainwave unlocks the potential of AI-powered applications"/>
      </div>

      <div className="relative">
        <SeCardSmartestAI/>
      </div>

    </Section>
  );
};

export default Services;