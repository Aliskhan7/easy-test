export interface ITheme {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}
export interface CourseListProps {
  topics?: string[];
  themes?: ITheme[];
  loading?: boolean;
}

export interface CourseListSidebarProps extends CourseListProps {
  selectedTopic: string;
  onClickCategory: (item: string) => void;
}

export interface IThemeContext {
  themes: ITheme[];
  loading: boolean;
}
