import { companyLogos } from "../../constant";


const CompanyLogo = ({ className }) => {
  return (
    <article className={`${className}`}>
      <h5 id="pricing" className="tagline mb-6 text-center text-n-1/50">Helping people create beautiful content at</h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li key={`logo-${item}-${index}`} className="flex items-center justify-center flex-1 h-36">
            <img src={item} width={134} height={28} alt={`logo-${index}`} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CompanyLogo;