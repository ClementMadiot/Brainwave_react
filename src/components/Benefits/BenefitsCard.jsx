// Icon
import { IoIosArrowForward } from "react-icons/io";
// design
import { GradientLight } from "./GradientLight";

const BenefitsCard = ({ item }) => {
  return (
    <>
    <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
      <h5 className="h5 mb-5">{item.title}</h5>
      <p className="body-2 mb-6 text-n-3">{item.text}</p>
      <div className="flex items-center mt-auto">
        <img src={item.iconUrl} width={48} height={48} alt={item.title} />
        <button className={`flex items-center ml-auto font-code text-sm font-bold text-n-1 uppercase tracking-wider pointer-events-auto ${item.hover} transition-colors`}>
          explore more <IoIosArrowForward className="flex flex-end ml-2 w-5 h-5"/>
        </button>
      </div>
    </div>
    {item.light && <GradientLight />}
    </>
  );
};

export default BenefitsCard;
