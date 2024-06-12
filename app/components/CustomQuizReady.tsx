import { useContext } from "react";
import { CustomQuizReadyProps } from "../types";
import { CustomQuizContext } from "../context/CustomQuizContext";

export default function CustomQuizReady({
  closeCustomQuizReady,
}: CustomQuizReadyProps) {
  const { isChillMode, pickedCategoryArray, questionAmount, questionTime } =
    useContext(CustomQuizContext);

  return (
    <div className="flex flex-col gap-6 items-center text-neutral-700">
      <span>TESTTEST</span>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeCustomQuizReady}
      >
        Back
      </div>
    </div>
  );
}
