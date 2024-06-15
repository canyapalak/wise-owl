import React, { useContext, useState, useEffect } from "react";
import { Category, CustomQuizSetProps } from "../types";
import { Box, Slider, useMediaQuery, useTheme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CustomQuizContext } from "../context/CustomQuizContext";

export default function CustomQuizSet({
  closeCustomQuizSet,
  openCustomQuizReady,
}: CustomQuizSetProps) {
  const {
    setIsChillMode,
    isChillMode,
    setPickedCategoryArray,
    pickedCategoryArray,
    setQuestionAmount,
    setQuestionTime,
  } = useContext(CustomQuizContext);

  const [customCategory, setCustomCategory] = useState<string>("");
  const [customCategoryArray, setCustomCategoryArray] = useState<Category[]>(
    []
  );
  const [customCategoryError, setCustomCategoryError] = useState<string>("");
  const [isInfo, setIsInfo] = useState(false);
  const [sliderValues, setSliderValues] = useState({ amount: 10, time: 10 });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const screenWidth = isSmallScreen ? 250 : isMediumScreen ? 320 : 400;

  useEffect(() => {
    setQuestionAmount(sliderValues.amount);
    setQuestionTime(sliderValues.time);
  }, [sliderValues, setQuestionAmount, setQuestionTime]);

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
    { title: "Literature", keyword: "literature, books and writers" },
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

  const handleCustomCategoryClick = () => {
    const trimmedCategory = customCategory.trim();

    if (trimmedCategory === "") {
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

    const categoryExists =
      pickedCategoryArray.some(
        (category: Category) =>
          category.title.toLowerCase() === trimmedCategory.toLowerCase()
      ) ||
      customCategoryArray.some(
        (category: Category) =>
          category.title.toLowerCase() === trimmedCategory.toLowerCase()
      );

    if (categoryExists) {
      setCustomCategoryError("This category already exists.");
      return;
    }

    const newCategory: Category = {
      title: trimmedCategory,
      keyword: trimmedCategory,
    };

    setPickedCategoryArray((prevArray: Category[]) => [
      ...prevArray,
      newCategory,
    ]);
    setCustomCategoryArray((prevArray: Category[]) => [
      ...prevArray,
      newCategory,
    ]);
    setCustomCategory("");
    setCustomCategoryError("");
  };

  const handleCategoryClick = (keyword: string, title: string) => {
    setPickedCategoryArray((prevArray: Category[]) => {
      const index = prevArray.findIndex(
        (category: Category) => category.title === title
      );
      if (index !== -1) {
        return prevArray.filter(
          (category: Category) => category.title !== title
        );
      } else {
        return [...prevArray, { title, keyword }];
      }
    });
  };

  const handleRemoveCustomCategory = (title: string) => {
    setPickedCategoryArray((prevArray: Category[]) =>
      prevArray.filter((category: Category) => category.title !== title)
    );
    setCustomCategoryArray((prevArray: Category[]) =>
      prevArray.filter((category: Category) => category.title !== title)
    );
  };

  const handleSliderChange = (type: "amount" | "time", value: number) => {
    setSliderValues((prev) => ({ ...prev, [type]: value }));
  };

  const handleChillModeClick = () => {
    setIsChillMode(!isChillMode);
  };

  const handleOpenInfo = () => {
    setIsInfo(!isInfo);
  };

  const closeQuizSetOpenQuizReady = (): void => {
    closeCustomQuizSet();
    openCustomQuizReady();
  };

  return (
    <div className="flex flex-col gap-6 items-center text-neutral-700">
      <p className="text-center fade-in">It is time to create your own quiz!</p>
      <div className="flex flex-col gap-4 text-xl fade-in">
        <p>1. Pick any of the default categories you want:</p>
        <div className="flex flex-wrap gap-2 justify-center fade-in">
          {CategoryArray.map((cat, index) => (
            <div
              key={index}
              className={`bg-navy-default button-prm text-neutral-50 text-xl rounded-md pt-1 px-3 cursor-pointer w-25 h-10 shadow-lg shadow-zinc-400 flex align-middle ${
                pickedCategoryArray.some(
                  (category: Category) => category.title === cat.title
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
                className="border-[3px] border-gray-default rounded-md pl-2 pr-9 accent-rose-500 outline-none focus:border-black w-64 input-area"
              />
              <div
                className="bg-green-default text-neutral-50 text-2xl rounded-r-[4px] border-l-[3px] border-gray-default cursor-pointer hover:bg-green-light w-7 h-[28.5px] text-center relative right-[30.5px] input-button"
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
                <div className="flex flex-row" key={index}>
                  <div className="bg-navy-light button-prm-active text-neutral-50 text-xl rounded-md pl-3 pr-4 w-25 h-10 shadow-lg shadow-zinc-400 flex items-center relative my-auto">
                    {cat.title}
                    <div
                      className="absolute text-sm cursor-pointer text-cyan-800 right-1 top-0 hover:text-cyan-950"
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
            <Box sx={{ screenWidth }}>
              <Slider
                sx={{ color: lightGreen[700], width: screenWidth }}
                aria-label="Questions"
                defaultValue={10}
                onChange={(e, value) =>
                  handleSliderChange("amount", value as number)
                }
                valueLabelDisplay="auto"
                step={1}
                marks
                min={5}
                max={30}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>4. How many seconds do you need for each question?</p>
          <div>
            <Box sx={{ screenWidth }}>
              <Slider
                sx={{ color: lightGreen[700], width: screenWidth }}
                aria-label="Time"
                defaultValue={10}
                onChange={(e, value) =>
                  handleSliderChange("time", value as number)
                }
                valueLabelDisplay="auto"
                step={1}
                marks
                min={5}
                max={30}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>5. Do you want chill mode?</p>
          <div className="flex flex-row gap-2 align-middle">
            {!isChillMode ? (
              <ToggleOffOutlinedIcon
                onClick={handleChillModeClick}
                className="cursor-pointer text-4xl"
              />
            ) : (
              <ToggleOnOutlinedIcon
                onClick={handleChillModeClick}
                className="cursor-pointer text-4xl text-green-default"
              />
            )}
            <InfoOutlinedIcon
              className="w-5 cursor-pointer hover:text-gray-default mt-1.5"
              onClick={handleOpenInfo}
            />
            <div>
              {isInfo ? (
                <p className="absolute text-sm mt-2 italic text-gray-default  ">
                  Chill mode removes time limit.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className={`button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 ${
            pickedCategoryArray.length === 0 && "opacity-50 pointer-events-none"
          }`}
          onClick={closeQuizSetOpenQuizReady}
        >
          Next
        </div>
        <div
          className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
          onClick={closeCustomQuizSet}
        >
          Back
        </div>
      </div>
    </div>
  );
}
