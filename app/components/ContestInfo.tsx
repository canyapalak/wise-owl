import { ContestInfoProps } from "../types";

export default function ContestInfo({
  closeContestInfo,
  openCategories,
}: ContestInfoProps) {
  function closeInfoandOpenCategories() {
    openCategories();
    closeContestInfo();
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="text-center text-neutral-700 fade-in">
        You will be asked 10 questions in the category you pick. At the end of
        the contest, you can find out whether you are the "Wise Owl" or
        something else.
      </p>
      <div className="flex flex-col gap-3">
        <div
          className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeInfoandOpenCategories}
        >
          Next
        </div>
        <div
          className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeContestInfo}
        >
          Back
        </div>
      </div>
    </div>
  );
}
