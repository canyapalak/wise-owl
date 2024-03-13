import React, { createContext, useState, ReactNode } from "react";
import { ScoreProviderProps } from "../types";

export const ScoreContext = createContext<ScoreProviderProps | any>(undefined);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<number | null>(0);

  const contextValue: ScoreProviderProps = {
    score,
    setScore,
  };

  return (
    <ScoreContext.Provider value={contextValue}>
      {children}
    </ScoreContext.Provider>
  );
};
