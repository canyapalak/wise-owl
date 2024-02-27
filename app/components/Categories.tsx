import { Category } from "../types";

export default function Categories({
  closeCategories,
}: {
  closeCategories: () => void;
}) {
  const CategoryArray: Category[] = [
    {
      id: 1,
      title: "Cinema",
      keyword: "cinema",
    },
    {
      id: 2,
      title: "Games",
      keyword: "video games",
    },
    {
      id: 3,
      title: "History",
      keyword: "history",
    },
    {
      id: 4,
      title: "Literature",
      keyword: "literature",
    },
    {
      id: 5,
      title: "Sports",
      keyword: "sports",
    },
    {
      id: 6,
      title: "Technology",
      keyword: "technology",
    },
    {
      id: 7,
      title: "Travel",
      keyword: "travel/tourism",
    },
    {
      id: 8,
      title: "Everything!",
      keyword: "everything",
    },
  ];

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        {CategoryArray.map((cat) => (
          <div
            key={cat.id}
            className="button-prm bg-navy-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-navy-light w-40 text-center"
          >
            {cat.title}
          </div>
        ))}
      </div>
      <div
        className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-48 text-center"
        onClick={closeCategories}
      >
        Back
      </div>
    </div>
  );
}
