import { WelcomeButtonsProps } from "../types";

export default function WelcomeButtons({
  openCategories,
  openInfo,
}: WelcomeButtonsProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-48 text-center"
      >
        Competition
      </div>
      <div
        className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-48 text-center"
        onClick={openCategories}
      >
        Endless Quiz
      </div>
      <div
        className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-48 text-center"
        onClick={openInfo}
      >
        What's This?
      </div>
    </div>
  );
}
