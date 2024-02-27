export interface WelcomeButtonsProps {
  openCategories: () => void;
  openInfo: () => void;
}

export interface Category {
  id: number;
  title: string;
  keyword: string;
}

export interface CategoryProviderProps {
  pickedCategory: any;
  setPickedCategory: any;
}
