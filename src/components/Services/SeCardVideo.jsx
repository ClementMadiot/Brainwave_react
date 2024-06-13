import { brainwaveServicesIcons } from "../../constant";
import { service3 } from "../../assets";
import { VideoBar, VideoChatMessage } from "./DesignServices";

const SeCardVideo = () => {
  return (
    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
      <div className="py-12 px-4 xl:px-8">
        <h4 className="h4 mb-4">Video generation</h4>
        <p className="body-2 mb-8 text-n-3">
          The world's most powerful AI photo and video art generation engine.
          What will you create?
        </p>
        {/* icons  */}
        <ul className="flex items-center justify-between">
          {brainwaveServicesIcons.map((item, index) => (
            <li
              key={index}
              className={`rounded-2xl flex items-center justify-center ${
                index === 2
                  ? "w-12 h-12 p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                  : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
              }`}
            >
              <div
                className={
                  index === 2
                    ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                    : ""
                }
              >
                <img src={item} width={24} height={24} alt="application" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
        <img
          src={service3}
          alt="scary robot"
          className="w-full h-full object-cover"
          width={520}
          height={400}
        />
        <VideoChatMessage />
        <VideoBar />
      </div>
    </div>
  );
};

export default SeCardVideo;
