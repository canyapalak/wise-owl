import Categories from "@/app/components/Categories";
import EndlessQuiz from "@/app/components/EndlessQuiz";
import Contest from "@/app/components/Contest";
import Info from "@/app/components/Info";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import { useState } from "react";
import ContestInfo from "@/app/components/ContestInfo";

export default function Home() {
  const [isInfo, setIsInfo] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const [isEndlessQuiz, setIsEndlessQuiz] = useState(false);
  const [isContest, setIsContest] = useState(false);
  const [isContestInfo, setIsContestInfo] = useState(false);
  const [isContestCategories, setIsContestCategories] = useState(false);

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
    setIsContestCategories(false);
  };

  const openEndlessQuiz = (): void => {
    setIsEndlessQuiz(true);
    setIsContestCategories(false);
  };

  const closeEndlessQuiz = (): void => {
    setIsEndlessQuiz(false);
  };

  const openContest = (): void => {
    setIsContest(true);
  };

  const closeContest = (): void => {
    setIsContest(false);
  };

  const openContestInfo = (): void => {
    setIsContestInfo(true);
    setIsContestCategories(true);
  };

  const closeContestInfo = (): void => {
    setIsContestInfo(false);
  };

  return (
    <div className="text-2xl">
      {isInfo &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isEndlessQuiz && <Info closeInfo={closeInfo} />}
      {!isInfo &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        isEndlessQuiz && <EndlessQuiz closeEndlessQuiz={closeEndlessQuiz} />}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        isContestInfo &&
        !isContest && (
          <ContestInfo
            closeContestInfo={closeContestInfo}
            openCategories={openCategories}
          />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        isContest && <Contest closeContest={closeContest} />}
      {!isInfo &&
        isCategories &&
        !isContestInfo &&
        !isContest &&
        !isEndlessQuiz && (
          <Categories
            closeCategories={closeCategories}
            openEndlessQuiz={openEndlessQuiz}
            openContest={openContest}
            isContestCategories={isContestCategories}
          />
        )}
      {!isInfo &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isEndlessQuiz && (
          <WelcomeButtons
            openCategories={openCategories}
            openInfo={openInfo}
            openContestInfo={openContestInfo}
          />
        )}
    </div>
  );
}
