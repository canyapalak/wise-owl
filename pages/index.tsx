import { useState } from "react";
import Categories from "@/app/components/Categories";
import EndlessQuiz from "@/app/components/EndlessQuiz";
import Contest from "@/app/components/Contest";
import Info from "@/app/components/Info";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import ContestInfo from "@/app/components/ContestInfo";
import ContestResult from "@/app/components/ContestResult";
import CustomQuizSet from "@/app/components/CustomQuizSet";

export default function Home() {
  const [isInfo, setIsInfo] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const [isEndlessQuiz, setIsEndlessQuiz] = useState(false);
  const [isContest, setIsContest] = useState(false);
  const [isContestInfo, setIsContestInfo] = useState(false);
  const [isContestCategories, setIsContestCategories] = useState(false);
  const [isContestResult, setIsContestResult] = useState(false);
  const [isCustomQuizSet, setIsCustomQuizSet] = useState(false);

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

  const openContestResult = (): void => {
    setIsContestResult(true);
    console.log("isContestResult-func :>> ", isContestResult);
  };

  const closeContestResult = (): void => {
    setIsContestResult(false);
  };

  const openCustomQuizSet = (): void => {
    setIsCustomQuizSet(true);
  };

  const closeCustomQuizSet = (): void => {
    setIsCustomQuizSet(false);
  };

  console.log("isContestResult :>> ", isContestResult);

  return (
    <div className="text-2xl">
      {isInfo &&
        !isContestResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isEndlessQuiz && <Info closeInfo={closeInfo} />}
      {!isInfo &&
        !isContestResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        isEndlessQuiz && <EndlessQuiz closeEndlessQuiz={closeEndlessQuiz} />}
      {!isInfo &&
        !isContestResult &&
        !isCategories &&
        !isEndlessQuiz &&
        isContestInfo &&
        !isCustomQuizSet &&
        !isContest && (
          <ContestInfo
            closeContestInfo={closeContestInfo}
            openCategories={openCategories}
          />
        )}
      {!isInfo &&
        !isContestResult &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isCustomQuizSet &&
        isContest && (
          <Contest
            closeContest={closeContest}
            openContestResult={openContestResult}
          />
        )}
      {!isInfo &&
        !isContestResult &&
        isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isEndlessQuiz && (
          <Categories
            closeCategories={closeCategories}
            openEndlessQuiz={openEndlessQuiz}
            openContest={openContest}
            isContestCategories={isContestCategories}
          />
        )}
      {!isInfo &&
        !isContestResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isEndlessQuiz && (
          <WelcomeButtons
            openCategories={openCategories}
            openInfo={openInfo}
            openContestInfo={openContestInfo}
            openCustomQuizSet={openCustomQuizSet}
          />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isContest &&
        !isContestResult &&
        isCustomQuizSet && (
          <CustomQuizSet closeCustomQuizSet={closeCustomQuizSet} />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        isContestResult && (
          <ContestResult closeContestResult={closeContestResult} />
        )}
    </div>
  );
}
