export interface ICardOverview {
  placeholder?: string;
  subPlaceholder?: string;
  renderHeader?: JSX.Element;
  renderContent?: JSX.Element;
  className?: string;
  containerStyle?: string;
  divider?: boolean;
  customHeader?: JSX.Element;
}

export interface ICardStatus {
  placeholder: string;
  className?: string;
}
