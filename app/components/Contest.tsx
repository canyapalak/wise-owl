import { useContext } from "react";
import { ContestProps } from "../types";
import { CategoryContext } from "../context/CategoryContext";

export default function Competition({ closeContest }: ContestProps) {
  const pickedCategory = useContext(CategoryContext);
  return (
    <div>
      <p>Welcome to the Contest</p>
      <div
        className="button-prm bg-gray-default hover:bg-gray-light  text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-1"
        onClick={closeContest}
      >
        Home
      </div>
    </div>
  );
}
