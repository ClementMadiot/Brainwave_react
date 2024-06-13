import { service2 } from "../../assets/";
import { PhotoChatMessage } from "./DesignServices";

const SeCardEditing = ({ classesCard }) => {
  return (
    <div className={`${classesCard} min-h-[39rem]`}>
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={service2}
          width={630}
          height={750}
          alt="robot"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
        <h4 className="h4 mb-4">Photo editing</h4>
        <p className="body-2 mb-12 text-n-3">
          Automatically enhance your photos using our AI app's photo editing
          feature. Try it now!
        </p>
      </div>
      <PhotoChatMessage />
    </div>
  );
};

export default SeCardEditing;
