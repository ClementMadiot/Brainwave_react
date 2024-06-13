import { check } from "../../assets";
import { pricing } from "../../constant/index";
import Button from "../Button";
const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
        >
          <h4 className={`h4 mb-4`}>{item.title}</h4>
          <p>{item.description}</p>

          <div className="">
            {item.price && (
              <>
                <div>$</div>
                <div>{item.price}</div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:info@contactBrainwave.pro"}
            // if button have a price turn to white 
            white={!!item.price}
          >
            {(item.price ? "Get Started" : "Contact us")}
          </Button>
          <ul>
            {item.features.map((item,index) => (
              <li key={index}>
                <img src={check} width={24} height={24} alt="check" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
