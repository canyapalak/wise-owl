import { Dispatch, SetStateAction } from "react";

export interface WelcomeButtonsProps {
  openCategories: () => void;
  openInfo: () => void;
  openContestInfo: () => void;
}

export interface CategoriesProps {
  closeCategories: () => void;
  openEndlessQuiz: () => void;
  openContest: () => void;
  isContestCategories: boolean;
}

export interface EndlessQuizProps {
  closeEndlessQuiz: () => void;
}

export interface ContestProps {
  closeContest: () => void;
}

export interface ContestInfoProps {
  closeContestInfo: () => void;
  openCategories: () => void;
}
export interface Category {
  id: number;
  title: string;
  keyword: string;
}

export interface CategoryProviderProps {
  pickedCategoryKeyword: string | null;
  setPickedCategoryKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  pickedCategoryTitle: string | null;
  setPickedCategoryTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface QuestionCountProviderProps {
  questionCount: number;
  setQuestionCount: Dispatch<SetStateAction<number>>;
  isContestOver: boolean;
}

export interface formattedQuestion {
  question: string;
  options: string[];
  correctOption: string;
}

export interface ModalInterface {
  open: boolean;
  setOpen: (bool: boolean) => void;
}
