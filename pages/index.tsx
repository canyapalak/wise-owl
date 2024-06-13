import { useContext, useState } from "react";
import Categories from "@/app/components/Categories";
import EndlessQuiz from "@/app/components/EndlessQuiz";
import Contest from "@/app/components/Contest";
import Info from "@/app/components/Info";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import ContestInfo from "@/app/components/ContestInfo";
import ContestResult from "@/app/components/ContestResult";
import CustomQuizSet from "@/app/components/CustomQuizSet";
import CustomQuizReady from "@/app/components/CustomQuizReady";
import { CustomQuizContext } from "@/app/context/CustomQuizContext";
import CustomQuiz from "@/app/components/CustomQuiz";
import CustomQuizResult from "@/app/components/CustomQuizResult";

export default function Home() {
  const { resetCustomQuizContext } = useContext(CustomQuizContext);
  const [isInfo, setIsInfo] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const [isEndlessQuiz, setIsEndlessQuiz] = useState(false);
  const [isContest, setIsContest] = useState(false);
  const [isContestInfo, setIsContestInfo] = useState(false);
  const [isContestCategories, setIsContestCategories] = useState(false);
  const [isContestResult, setIsContestResult] = useState(false);
  const [isCustomQuizSet, setIsCustomQuizSet] = useState(false);
  const [isCustomQuizReady, setIsCustomQuizReady] = useState(false);
  const [isCustomQuiz, setIsCustomQuiz] = useState(false);
  const [isCustomQuizResult, setIsCustomQuizResult] = useState(false);

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

  const openCustomQuiz = (): void => {
    setIsCustomQuiz(true);
  };

  const closeCustomQuiz = (): void => {
    setIsCustomQuiz(false);
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
  };

  const closeContestResult = (): void => {
    setIsContestResult(false);
  };

  const openCustomQuizResult = (): void => {
    setIsCustomQuizResult(true);
  };

  const closeCustomQuizResult = (): void => {
    setIsCustomQuizResult(false);
  };

  const openCustomQuizSet = (): void => {
    setIsCustomQuizSet(true);
  };

  const closeCustomQuizSet = (): void => {
    setIsCustomQuizSet(false);
  };

  const openCustomQuizReady = (): void => {
    setIsCustomQuizReady(true);
  };

  const closeCustomQuizReady = (): void => {
    setIsCustomQuizReady(false);
    setIsCustomQuizSet(false);
  };

  console.log("isContestResult :>> ", isContestResult);

  return (
    <div className="text-2xl">
      {isInfo &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        !isEndlessQuiz && <Info closeInfo={closeInfo} />}
      {!isInfo &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        isEndlessQuiz && <EndlessQuiz closeEndlessQuiz={closeEndlessQuiz} />}
      {!isInfo &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isEndlessQuiz &&
        isCustomQuiz && (
          <CustomQuiz
            closeCustomQuiz={closeCustomQuiz}
            openCustomQuizResult={openCustomQuizResult}
          />
        )}
      {!isInfo &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCategories &&
        !isEndlessQuiz &&
        isContestInfo &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        !isContest && (
          <ContestInfo
            closeContestInfo={closeContestInfo}
            openCategories={openCategories}
          />
        )}
      {!isInfo &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        isContest && (
          <Contest
            closeContest={closeContest}
            openContestResult={openContestResult}
          />
        )}
      {!isInfo &&
        !isContestResult &&
        !isCustomQuizResult &&
        isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
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
        !isCustomQuizResult &&
        !isCategories &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        !isEndlessQuiz && (
          <WelcomeButtons
            openCategories={openCategories}
            openInfo={openInfo}
            openContestInfo={openContestInfo}
            openCustomQuizSet={openCustomQuizSet}
            resetCustomQuizContext={resetCustomQuizContext}
          />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isContest &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        isCustomQuizSet && (
          <CustomQuizSet
            closeCustomQuizSet={closeCustomQuizSet}
            openCustomQuizReady={openCustomQuizReady}
          />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isContest &&
        !isContestResult &&
        !isCustomQuizResult &&
        !isCustomQuizSet &&
        !isCustomQuiz &&
        isCustomQuizReady && (
          <CustomQuizReady
            closeCustomQuizReady={closeCustomQuizReady}
            openCustomQuiz={openCustomQuiz}
          />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        !isCustomQuizResult &&
        isContestResult && (
          <ContestResult closeContestResult={closeContestResult} />
        )}
      {!isInfo &&
        !isCategories &&
        !isEndlessQuiz &&
        !isContestInfo &&
        !isContest &&
        !isCustomQuizSet &&
        !isCustomQuizReady &&
        !isCustomQuiz &&
        !isContestResult &&
        isCustomQuizResult && (
          <CustomQuizResult closeCustomQuizResult={closeCustomQuizResult} />
        )}
    </div>
  );
}
