export default function EndlessQuiz({
  closeEndlessQuiz,
}: {
  closeEndlessQuiz: () => void;
}) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div>Endless Quiz</div>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center"
        onClick={closeEndlessQuiz}
      >
        Home
      </div>
    </div>
  );
}
