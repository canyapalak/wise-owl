import React, { createContext, useState, ReactNode } from "react";
import { CategoryProviderProps } from "../types";

export const CategoryContext = createContext<CategoryProviderProps | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [pickedCategory, setPickedCategory] = useState<any>(undefined);

  const contextValue: CategoryProviderProps = {
    pickedCategory,
    setPickedCategory,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};
