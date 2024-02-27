export default function Home() {
  return (
    <div>
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
        >
          Endless Quiz
        </div>
        <div
          className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-48 text-center"
        >
          What's This?
        </div>
      </div>
    </div>
  );
}
