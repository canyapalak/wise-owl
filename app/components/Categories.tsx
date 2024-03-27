import { useContext, useEffect, useState } from "react";
import { CategoriesProps, Category } from "../types";
import { CategoryContext } from "../context/CategoryContext";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
  const [isCategoryPicked, setIsCategoryPicked] = useState(false);
  const [clickedCategoryButton, setClickedCategoryButton] = useState<
    string | null
  >(null);

  const handleOpenInfo: any = () => {
    setIsInfo(!isInfo);
  };

  console.log("isContestCategories", isContestCategories);
  console.log("isChillMode :>> ", isChillMode);
  console.log("clickedCategoryButton :>> ", clickedCategoryButton);

  const CategoryArray: Category[] = [
    {
      title: "Cinema",
      keyword: "cinema culture, movies, actors, directors and movie awards",
    },
    {
      title: "Games",
      keyword:
        "famous video games, video game culture, video game companies and fun facts about video games",
    },
    {
      title: "History",
      keyword: "history, famous historical figures and events",
    },
    {
      title: "Literature",
      keyword: "literature, books and writers",
    },
    {
      title: "Sports",
      keyword:
        "sports, famous players and sport clubs, but not mostly from USA",
    },
    {
      title: "Technology",
      keyword:
        "technology, computer science, technology companies and technological products",
    },
    {
      title: "Travel",
      keyword: "travel, tourism, culture, cities and countries",
    },
    {
      title: "Everything!",
      keyword:
        "everything, including cinema, games, literature, sports, music, food, culture, video games, history, technology, travel, life and fun facts",
    },
  ];

  const handleEndlessCategoryClick = (keyword: string, title: string) => {
    setPickedCategoryKeyword(keyword);
    setPickedCategoryTitle(title);
    setIsCategoryPicked(true);
    setClickedCategoryButton(title);
  };

  const handleContestCategoryClick = (keyword: string, title: string) => {
    setPickedCategoryKeyword(keyword);
    setPickedCategoryTitle(title);
    setIsCategoryPicked(true);
    setClickedCategoryButton(title);
  };

  const handleEndlessStartClick = () => {
    closeCategories();
    openEndlessQuiz();
  };

  const handleContestStartClick = () => {
    closeCategories();
    openContest();
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-center text-neutral-700 fade-in">Pick a category!</p>
      <div className="flex flex-wrap gap-4 justify-center fade-in">
        {CategoryArray.map((cat, index) => (
          <div
            key={index}
            className={`button-prm bg-navy-default text-neutral-50 text-2xl rounded-md p-3
              cursor-pointer w-40 text-center shadow-lg shadow-zinc-400 ${
                clickedCategoryButton && clickedCategoryButton === cat.title
                  ? "button-prm-active bg-navy-light "
                  : ""
              }`}
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
            <ToggleOffOutlinedIcon
              onClick={handleChillModeClick}
              className="cursor-pointer text-3xl"
            />
          ) : (
            <ToggleOnOutlinedIcon
              onClick={handleChillModeClick}
              className="cursor-pointer text-3xl"
            />
          )}
          <p>Chill mode</p>
          <InfoOutlinedIcon
            className="w-5 cursor-pointer hover:text-gray-default"
            onClick={handleOpenInfo}
          />
        </div>
        {isInfo ? (
          <p className="text-sm absolute mt-7 italic text-gray-default  ">
            Chill mode removes time limit.
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <div
          className={`button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3
  cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 ${
    isCategoryPicked ? "" : "opacity-50 pointer-events-none"
  }`}
          onClick={() =>
            !isContestCategories
              ? handleEndlessStartClick()
              : handleContestStartClick()
          }
        >
          Start
        </div>
        <div
          className="button-prm bg-gray-default hover:bg-gray-light text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeCategories}
        >
          {isContestCategories ? "Home" : "Back"}
        </div>
      </div>
    </div>
  );
}
