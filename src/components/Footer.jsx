import Section from "./Section";
import { socials } from "../constant";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex sm:justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              className="flex items-center justify-center w-12 h-12 bg-n-7 rounded-full transition-color hover:bg-n-6 text-n-4 hover:text-n-3 "
              target="_blank"
              href={item.url}
            >
              {item.icon}
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
