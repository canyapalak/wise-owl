import Categories from "@/app/components/Categories";
import EndlessQuiz from "@/app/components/EndlessQuiz";
import Info from "@/app/components/Info";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import { useState } from "react";

export default function Home() {
  const [isInfo, setIsInfo] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const [isEndlessQuiz, setIsEndlessQuiz] = useState(false);

  const openInfo = (): void => {
    setIsInfo(true);
  };

  const closeInfo = (): void => {
    setIsInfo(false);
  };

  const openCategories = (): void => {
    setIsCategories(true);
  };

  const closeCategories = (): void => {
    setIsCategories(false);
  };

  const openEndlessQuiz = (): void => {
    setIsEndlessQuiz(true);
  };

  const closeEndlessQuiz = (): void => {
    setIsEndlessQuiz(false);
  };

  return (
    <div className="text-2xl">
      {isInfo && !isCategories && !isEndlessQuiz && (
        <Info closeInfo={closeInfo} />
      )}
      {!isInfo && !isCategories && isEndlessQuiz && (
        <EndlessQuiz closeEndlessQuiz={closeEndlessQuiz} />
      )}
      {!isInfo && isCategories && !isEndlessQuiz && (
        <Categories
          closeCategories={closeCategories}
          openEndlessQuiz={openEndlessQuiz}
        />
      )}
      {!isInfo && !isCategories && !isEndlessQuiz && (
        <WelcomeButtons openCategories={openCategories} openInfo={openInfo} />
      )}
    </div>
  );
}
