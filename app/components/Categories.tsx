import { useContext } from "react";
import { CategoriesProps, Category } from "../types";
import { CategoryContext } from "../context/CategoryContext";

export default function Categories({
  closeCategories,
  openEndlessQuiz,
}: CategoriesProps) {
  const { setPickedCategory } = useContext(CategoryContext);

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
      keyword: "literature, books and writers",
    },
    {
      id: 5,
      title: "Sports",
      keyword: "sports, famous players and sport clubs",
    },
    {
      id: 6,
      title: "Technology",
      keyword: "technology",
    },
    {
      id: 7,
      title: "Travel",
      keyword: "travel and tourism",
    },
    {
      id: 8,
      title: "Everything!",
      keyword: "everything",
    },
  ];

  const handleCategoryClick = (keyword: string) => {
    setPickedCategory(keyword);
    closeCategories();
    openEndlessQuiz();
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        {CategoryArray.map((cat) => (
          <div
            key={cat.id}
            className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-40 text-center"
            onClick={() => handleCategoryClick(cat.keyword)}
          >
            {cat.title}
          </div>
        ))}
      </div>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center"
        onClick={closeCategories}
      >
        Back
      </div>
    </div>
  );
}
