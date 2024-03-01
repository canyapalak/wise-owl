export interface WelcomeButtonsProps {
  openCategories: () => void;
  openInfo: () => void;
}

export interface CategoriesProps {
  closeCategories: () => void;
  openEndlessQuiz: () => void;
}

export interface EndlessQuizProps {
  closeEndlessQuiz: () => void;
  openEndlessQuiz: () => void;
}

export interface Category {
  id: number;
  title: string;
  keyword: string;
}

export interface CategoryProviderProps {
  pickedCategory: string | null;
  setPickedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface formattedQuestion {
  question: string;
  options: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
  correctAnswer: {
    answer: string;
  };
}
