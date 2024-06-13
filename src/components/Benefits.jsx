// components
import Heading from "./Heading";
import Section from "./Section";
// array
import { benefits } from "../constant";
// assets
import ClipPath from "../assets/svg/ClipPath";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
  return (
    <Section id="features">
      <section className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex justify-center flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <article
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <BenefitsCard item={item} />
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-[0.02] transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </article>
          ))}
        </div>
      </section>
    </Section>
  );
};

export default Benefits;
