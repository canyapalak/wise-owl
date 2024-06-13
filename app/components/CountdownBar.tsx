import { useContext } from "react";
import { CustomQuizContext } from "../context/CustomQuizContext";

export default function CountdownBar() {
  const { questionTime } = useContext(CustomQuizContext);
  console.log("CountdownBar-questionTime", questionTime);
  return (
    <div className="pr-container text-center items-center w-full">
      <div className="progress progress-moved bg-gray-ultralight rounded-md p-1">
        <div
          className="progress-bar h-3"
          style={{ animationDuration: `${questionTime}s` }}
        ></div>
      </div>
    </div>
  );
}
