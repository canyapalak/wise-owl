// QuestionCountContext.js
import React, { createContext, useState, ReactNode } from "react";
import { QuestionCountProviderProps } from "../types";

export const QuestionCountContext = createContext<
  QuestionCountProviderProps | any
>(undefined);

export const QuestionCountProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [isContestOver, setIsContestOver] = useState<boolean>(false);

  const contextValue: QuestionCountProviderProps = {
    questionCount,
    setQuestionCount,
    isContestOver,
  };

  function handleContestOver() {
    if (questionCount === 3) {
      setIsContestOver(true);
    }
  }

  return (
    <QuestionCountContext.Provider value={contextValue}>
      {children}
    </QuestionCountContext.Provider>
  );
};
