import React, { createContext, useState, ReactNode } from "react";
import { Category, CustomQuizContextProps } from "../types";

export const CustomQuizContext = createContext<CustomQuizContextProps | any>(
  undefined
);

export const CustomQuizProvider = ({ children }: { children: ReactNode }) => {
  const [pickedCategoryArray, setPickedCategoryArray] = useState<Category[]>(
    []
  );

  const [isChillMode, setIsChillMode] = useState<boolean | null>(false);

  const [questionAmount, setQuestionAmount] = useState<number>(10);

  const [questionTime, setQuestionTime] = useState<number>(10);

  const resetCustomQuizContext = () => {
    setPickedCategoryArray([]);
    setIsChillMode(false);
    setQuestionAmount(10);
    setQuestionTime(10);
  };

  const contextValue: CustomQuizContextProps = {
    isChillMode,
    setIsChillMode,
    pickedCategoryArray,
    setPickedCategoryArray,
    questionAmount,
    setQuestionAmount,
    questionTime,
    setQuestionTime,
    resetCustomQuizContext,
  };

  return (
    <CustomQuizContext.Provider value={contextValue}>
      {children}
    </CustomQuizContext.Provider>
  );
};
