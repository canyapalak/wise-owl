import { useContext, useState } from "react";
import { Category, CustomQuizSetProps, SliderInterface } from "../types";
import { CategoryContext } from "../context/CategoryContext";
import { Box, Slider } from "@mui/material";

export default function CustomQuizSet({
  closeCustomQuizSet,
}: CustomQuizSetProps) {
  const {
    setPickedCategoryKeyword,
    setPickedCategoryTitle,
    setIsChillMode,
    isChillMode,
    setQuestionAmount,
    questionAmount,
  } = useContext(CategoryContext);

  const [clickedCategoryButton, setClickedCategoryButton] = useState<
    string | null
  >(null);

  const [pickedCategoryArray, setPickedCategoryArray] = useState<Category[]>(
    []
  );

  const [customCategory, setCustomCategory] = useState<string>("");

  const [customCategoryArray, setCustomCategoryArray] = useState<Category[]>(
    []
  );

  const [customCategoryError, setCustomCategoryError] = useState<string>("");

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

  function handleCustomCategoryClick() {
    const trimmedCategory = customCategory.trim();

    if (trimmedCategory == "") {
      setCustomCategoryError("Category cannot be empty.");
      return;
    }
    if (trimmedCategory.length < 3) {
      setCustomCategoryError("Category cannot be less than 3 characters.");
      return;
    }
    if (trimmedCategory.length > 20) {
      setCustomCategoryError("Category cannot exceed 20 characters.");
      return;
    }

    const newCategory: Category = {
      title: trimmedCategory,
      keyword: trimmedCategory,
    };

    setPickedCategoryArray((prevArray) => [...prevArray, newCategory]);
    setCustomCategoryArray((prevArray) => [...prevArray, newCategory]);
    setCustomCategory("");
    setCustomCategoryError("");
  }

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

  function handleRemoveCustomCategory(title: string) {
    setPickedCategoryArray((prevArray) =>
      prevArray.filter((category) => category.title !== title)
    );
    setCustomCategoryArray((prevArray) =>
      prevArray.filter((category) => category.title !== title)
    );
  }

  function handleSliderChange(value: number) {
    setQuestionAmount(value);
  }

  function getAriaValueText(value: number, index: number) {
    return `${value}`;
  }

  console.log("pickedCategoryArray", pickedCategoryArray);
  console.log("customCategoryArray", customCategoryArray);

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
                pickedCategoryArray.some(
                  (category) => category.title === cat.title
                )
                  ? "bg-navy-light button-prm-active"
                  : ""
              }`}
              onClick={() => handleCategoryClick(cat.keyword, cat.title)}
            >
              {cat.title}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <p>2. Create new categories if you want:</p>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <input
                type="text"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                className="border-[3px] border-gray-default rounded-md pl-2 pr-9 accent-rose-500 outline-none
              focus:border-black w-64 input-area"
              />
              <div
                className="bg-green-default text-neutral-50 text-2xl rounded-r-[4px] border-l-[3px] border-gray-default
          cursor-pointer hover:bg-green-light w-7 h-[28.5px] text-center relative right-[30.5px] input-button"
                onClick={handleCustomCategoryClick}
              >
                &gt;
              </div>
            </div>
            {customCategoryError && (
              <p className="text-red-500 text-sm italic absolute mt-9">
                {customCategoryError}
              </p>
            )}
          </div>
          {customCategoryArray.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center fade-in mt-3">
              {customCategoryArray.map((cat, index) => (
                <div className="flex flex-row">
                  <div
                    key={index}
                    className="bg-mustard-default text-neutral-50 text-xl rounded-md pl-3 pr-4 
      w-25 h-10 shadow-lg shadow-zinc-400 flex items-center relative my-auto"
                  >
                    {cat.title}
                    <div
                      className="absolute text-sm 
    cursor-pointer text-black right-1 top-0 hover:text-gray-600"
                      onClick={() => handleRemoveCustomCategory(cat.title)}
                    >
                      x
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <p>3. How many questions do you want in your quiz?</p>
          <div>
            <Box sx={{ width: 400 }}>
              <Slider
                aria-label="Questions"
                defaultValue={10}
                getAriaValueText={getAriaValueText}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={1}
                marks
                min={5}
                max={30}
              />
            </Box>
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
