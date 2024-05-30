import React, { createContext, useState, ReactNode } from "react";
import { CategoryProviderProps } from "../types";

export const CategoryContext = createContext<CategoryProviderProps | any>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [pickedCategoryKeyword, setPickedCategoryKeyword] = useState<
    string | null
  >(null);

  const [pickedCategoryTitle, setPickedCategoryTitle] = useState<string | null>(
    null
  );

  const [isChillMode, setIsChillMode] = useState<boolean | null>(false);
  const [questionAmount, setQuestionAmount] = useState<number | null>(10);
  const [questionTime, setQuestionTime] = useState<number | null>(10);

  const contextValue: CategoryProviderProps = {
    pickedCategoryKeyword,
    setPickedCategoryKeyword,
    pickedCategoryTitle,
    setPickedCategoryTitle,
    isChillMode,
    setIsChillMode,
    questionAmount,
    setQuestionAmount,
    questionTime,
    setQuestionTime,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};
