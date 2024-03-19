import { useContext, useEffect, useState } from "react";
import { CategoriesProps, Category } from "../types";
import { CategoryContext } from "../context/CategoryContext";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export default function Categories({
  closeCategories,
  openEndlessQuiz,
  openContest,
  isContestCategories,
}: CategoriesProps) {
  const {
    setPickedCategoryKeyword,
    setPickedCategoryTitle,
    setIsChillMode,
    isChillMode,
  } = useContext(CategoryContext);

  useEffect(() => {
    setIsChillMode(false);
  }, []);

  const handleChillModeClick = () => {
    setIsChillMode(!isChillMode);
  };

  const [isInfo, setIsInfo] = useState(false);

  const handleOpenInfo: any = () => {
    setIsInfo(!isInfo);
  };

  console.log("isContestCategories", isContestCategories);
  console.log("isChillMode :>> ", isChillMode);

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
      <div className="flex flex-col items-center text-neutral-700 fade-in mb-2">
        <div className="flex flex-row gap-2 text-xl items-center">
          {!isChillMode ? (
            <CheckBoxOutlineBlankIcon
              onClick={handleChillModeClick}
              className="cursor-pointer"
            />
          ) : (
            <CheckBoxRoundedIcon
              onClick={handleChillModeClick}
              className="cursor-pointer"
            />
          )}
          <p>Chill mode</p>
          <HelpOutlineOutlinedIcon
            className="w-5 cursor-pointer hover:text-gray-default"
            onClick={handleOpenInfo}
          />
        </div>
        {isInfo ? (
          <p className="text-sm absolute mt-7 italic text-brick-light  ">
            Chill mode removes time limit.
          </p>
        ) : null}
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
