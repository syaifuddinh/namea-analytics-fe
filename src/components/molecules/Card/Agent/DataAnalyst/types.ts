export interface ICardAnalyst {
  placeholder?: string;
  subPlaceholder?: string;
  renderHeader?: JSX.Element;
  renderContent?: JSX.Element;
  className?: string;
  containerStyle?: string;
  divider?: boolean;
  customHeader?: JSX.Element;
  containerBgColor?: string;
  showDetail?: boolean;
  onPressShow?: () => void;
}

export interface ICardMonthlyAnalyst {
  month: string;
  revenue: string;
  profit: boolean;
  percentage: string;
}
