import { useContext } from "react";
import { Category, CustomQuizReadyProps } from "../types";
import { CustomQuizContext } from "../context/CustomQuizContext";

export default function CustomQuizReady({
  closeCustomQuizReady,
  openCustomQuiz,
}: CustomQuizReadyProps) {
  const { isChillMode, pickedCategoryArray, questionAmount, questionTime } =
    useContext(CustomQuizContext);

  function closeCustomQuizReadyOpenCustomQuiz() {
    openCustomQuiz();
    closeCustomQuizReady();
  }

  return (
    <div className="flex flex-col gap-6 text-neutral-700">
      <p className="text-center fade-in">You are ready to start!</p>
      <div className="flex flex-col gap-2 text-xl">
        {pickedCategoryArray.length === 1 ? (
          <p>Category:</p>
        ) : (
          <p>Categories:</p>
        )}
        <div className="flex gap-2 justify-center fade-in">
          {pickedCategoryArray.map((cat: Category, index: number) => (
            <div
              key={index}
              className="bg-navy-default text-neutral-50 text-xl rounded-md pt-1 px-3 w-25 h-10 shadow-lg shadow-zinc-400 flex align-middle"
            >
              {cat.title}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-2 text-xl">
        <p>Number of questions:</p>
        <p className="text-mustard-default">{questionAmount}</p>
      </div>

      <div className="flex flex-row gap-2 text-xl">
        <p>Question Time:</p>
        <div className="flex flex-row gap-2">
          <p className="text-mustard-default">{questionTime}</p>
          <p>sec.</p>
        </div>
      </div>

      <div className="flex flex-row gap-2 text-xl">
        <p>Chill mode:</p>
        {isChillMode === true ? (
          <p className="text-green-default ">Yes</p>
        ) : (
          <p className="text-red-default">No</p>
        )}
      </div>

      <div className="flex flex-col gap-3 items-center">
        <div
          className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeCustomQuizReadyOpenCustomQuiz}
        >
          Start
        </div>
        <div
          className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeCustomQuizReady}
        >
          Home
        </div>
      </div>
    </div>
  );
}
