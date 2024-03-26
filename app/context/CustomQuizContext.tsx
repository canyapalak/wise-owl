import React, { createContext, useState, ReactNode } from "react";
import { CustomQuizContextProps } from "../types";

export const CustomQuizContext = createContext<CustomQuizContextProps | any>(
  undefined
);

export const CustomQuizProvider = ({ children }: { children: ReactNode }) => {
  const [pickedCategoryKeyword, setPickedCategoryKeyword] = useState<
    string | null
  >(null);

  const [pickedCategoryTitle, setPickedCategoryTitle] = useState<string | null>(
    null
  );

  const [isChillMode, setIsChillMode] = useState<boolean | null>(false);

  const contextValue: CustomQuizContextProps = {
    pickedCategoryKeyword,
    setPickedCategoryKeyword,
    pickedCategoryTitle,
    setPickedCategoryTitle,
    isChillMode,
    setIsChillMode,
  };

  return (
    <CustomQuizContext.Provider value={contextValue}>
      {children}
    </CustomQuizContext.Provider>
  );
};
