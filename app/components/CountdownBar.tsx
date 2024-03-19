export default function CountdownBar() {
  return (
    <div className="pr-container mx-8 mb-6 text-center items-center">
      <div className="progress progress-moved bg-gray-ultralight rounded-md p-1 w-auto">
        <div className="progress-bar h-3 w-auto"></div>
      </div>
    </div>
  );
}
