import { ContestResultProps } from "../types";

export default function ContestResult({
  closeContestResult,
}: ContestResultProps) {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-center text-neutral-700">
          <span>This is the result page!</span>
        </p>
        <p>ddfdfdsfs</p>
        <div
          className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeContestResult}
        >
          Home
        </div>
      </div>
    </div>
  );
}
