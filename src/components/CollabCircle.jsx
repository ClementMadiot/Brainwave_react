import { brainwaveSymbol, check } from "../assets";
import { collabApps } from "../constant";
import { LeftCurve } from './design/Collaboration'

const CollabCircle = () => {
  return (
    <article className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-24 aspect-square m-auto border p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    alt="brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-2xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      src={app.icon}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve className=" z-0"/>
    </article>
  );
};

export default CollabCircle;