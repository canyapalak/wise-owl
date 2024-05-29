export interface WelcomeButtonsProps {
  openCategories: () => void;
  openInfo: () => void;
  openContestInfo: () => void;
  openCustomQuizSet: () => void;
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
  openContestResult: () => void;
}

export interface ContestInfoProps {
  closeContestInfo: () => void;
  openCategories: () => void;
}

export interface ContestResultProps {
  closeContestResult: () => void;
}

export interface CustomQuizSetProps {
  closeCustomQuizSet: () => void;
}
export interface Category {
  title: string;
  keyword: string;
}
export interface CategoryProviderProps {
  pickedCategoryKeyword: string | null;
  setPickedCategoryKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  pickedCategoryTitle: string | null;
  setPickedCategoryTitle: React.Dispatch<React.SetStateAction<string | null>>;
  isChillMode: boolean | null;
  setIsChillMode: React.Dispatch<React.SetStateAction<boolean | null>>;
  questionAmount: number | null;
  setQuestionAmount: React.Dispatch<React.SetStateAction<number | null>>;
}
export interface ScoreProviderProps {
  score: number | null;
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface CustomQuizContextProps {
  pickedCategoryKeyword: string | null;
  setPickedCategoryKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  pickedCategoryTitle: string | null;
  setPickedCategoryTitle: React.Dispatch<React.SetStateAction<string | null>>;
  isChillMode: boolean | null;
  setIsChillMode: React.Dispatch<React.SetStateAction<boolean | null>>;
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

export interface SliderInterface {
  event: Event;
  value: number | number[];
  activeThumb: number;
}
