import { check, service1 } from "../../assets";
import { brainwaveServices } from "../../constant";
import Generating from "../Generating";

const SeCardSmartestAI = ({ classesCard }) => {
  return (
    <article
      className={` ${classesCard} z-1 flex items-center h-[39rem] mb-5 p-8  lg:p-20 xl:h-[46rem]`}
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
        <img
          className="w-full h-full object-cover md:object-right"
          src={service1}
          alt="Smartest AI"
          width={800}
          height={730}
        />
      </div>

      <div className="relative z-1 max-w-[17rem] ml-auto">
        <h4 className="h4 mb-4">Smartest AI</h4>
        <p className="body-2 mb-12 text-n-3">
          Brainwave unlock the piitential of AI-powered applications
        </p>
        <ul className="body-2">
          {brainwaveServices.map((item, index) => (
            <li
              className="flex items-start py-4 border-t border-n-6"
              key={index}
            >
              <img src={check} alt="check" />
              <p className="ml-4">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <Generating className="absolute bottom-4 right-4 left-4 border-n-1/10 border md:left-1/2 md:right-auto md:bottom-6 lg:bottom-8 md:-translate-x-1/2" />
    </article>
  );
};

export default SeCardSmartestAI;
