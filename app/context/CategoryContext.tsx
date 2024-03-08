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

  const contextValue: CategoryProviderProps = {
    pickedCategoryKeyword,
    setPickedCategoryKeyword,
    pickedCategoryTitle,
    setPickedCategoryTitle,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};
