import { useContext } from "react";
import { CategoriesProps, Category } from "../types";
import { CategoryContext } from "../context/CategoryContext";

export default function Categories({
  closeCategories,
  openEndlessQuiz,
  openContest,
  isContestCategories,
}: CategoriesProps) {
  const { setPickedCategoryKeyword, setPickedCategoryTitle } =
    useContext(CategoryContext);

  console.log("isContestCategories", isContestCategories);

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
      keyword:
        "sports, famous players and sport clubs, but not mostly from USA",
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
      keyword: "fun facts",
    },
  ];

  const handleEndlessCategoryClick = (keyword: string, title: string) => {
    setPickedCategoryKeyword(keyword);
    setPickedCategoryTitle(title);
    closeCategories();
    openEndlessQuiz();
  };

  const handleContestCategoryClick = (keyword: string, title: string) => {
    setPickedCategoryKeyword(keyword);
    setPickedCategoryTitle(title);
    closeCategories();
    openContest();
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-center text-neutral-700 fade-in">Pick a category!</p>
      <div className="flex flex-wrap gap-4 justify-center fade-in">
        {CategoryArray.map((cat) => (
          <div
            key={cat.id}
            className="button-prm bg-navy-default hover:bg-navy-light text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-40 text-center shadow-lg shadow-zinc-400"
            onClick={() =>
              !isContestCategories
                ? handleEndlessCategoryClick(cat.keyword, cat.title)
                : handleContestCategoryClick(cat.keyword, cat.title)
            }
          >
            {cat.title}
          </div>
        ))}
      </div>
      <div
        className="button-prm bg-gray-default hover:bg-gray-light text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-2"
        onClick={closeCategories}
      >
        {isContestCategories ? "Home" : "Back"}
      </div>
    </div>
  );
}
