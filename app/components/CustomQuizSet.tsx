import { useContext, useState } from "react";
import { Category, CustomQuizSetProps } from "../types";
import { CategoryContext } from "../context/CategoryContext";

export default function CustomQuizSet({
  closeCustomQuizSet,
}: CustomQuizSetProps) {
  const {
    setPickedCategoryKeyword,
    setPickedCategoryTitle,
    setIsChillMode,
    isChillMode,
  } = useContext(CategoryContext);

  const [clickedCategoryButton, setClickedCategoryButton] = useState<
    string | null
  >(null);

  const [pickedCategoryArray, setPickedCategoryArray] = useState<Category[]>(
    []
  );

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
  ];

  const handleCategoryClick = (keyword: string, title: string) => {
    setPickedCategoryKeyword(keyword);
    setPickedCategoryTitle(title);
    setClickedCategoryButton(title);

    const index = pickedCategoryArray.findIndex(
      (category) => category.title === title
    );

    if (index !== -1) {
      setPickedCategoryArray((prevArray) =>
        prevArray.filter((category) => category.title !== title)
      );
    } else {
      const pickedCategory: Category = {
        title: title,
        keyword: keyword,
      };
      setPickedCategoryArray((prevArray) => [...prevArray, pickedCategory]);
    }
  };

  console.log("pickedCategoryArray", pickedCategoryArray);

  return (
    <div className="flex flex-col gap-6 items-center text-neutral-700">
      <p className="text-center fade-in">It is time to create your own quiz!</p>
      <div className="flex flex-col gap-4 text-xl fade-in">
        <p>1. Pick any of the default categories you want:</p>
        <div className="flex flex-wrap gap-2 justify-center fade-in">
          {CategoryArray.map((cat, index) => (
            <div
              key={index}
              className={`bg-navy-default button-prm text-neutral-50 text-xl rounded-md pt-1 px-3
              cursor-pointer w-25 h-10 shadow-lg shadow-zinc-400 flex align-middle ${
                pickedCategoryArray.some((category) => category.title === cat.title)
                  ? "bg-navy-light button-prm-active"
                  : ""
              }`}
              onClick={() => handleCategoryClick(cat.keyword, cat.title)}
            >
              {cat.title}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p>2. Create new categories if you want:</p>
          <div className="flex flex-row mt-4 items-center">
            <input type="text" className="border-[3px] border-gray-default rounded-md pl-2 pr-9 accent-rose-500 outline-none focus:border-black w-56"></input>
            <div className="bg-purple-default text-neutral-50 text-2xl rounded-r-md
          cursor-pointer hover:bg-purple-light w-7 h-[29px] text-center shadow-lg shadow-zinc-400 relative right-[30px]">&gt;</div>
          </div>
        </div>
      </div>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeCustomQuizSet}
      >
        Back
      </div>
    </div>
  );
}
