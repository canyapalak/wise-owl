export default function Info({ closeInfo }: { closeInfo: () => void }) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="text-center text-2xl">
        <span className="text-brick-light">Wise Owl</span> is a quiz app where
        the questions are crafted by AI on the spot. Pick your category, answer
        challenging questions, and strive to become the ultimate "Wise Owl".
      </p>
      <div
        className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-48 text-center"
        onClick={closeInfo}
      >
        Back
      </div>
    </div>
  );
}