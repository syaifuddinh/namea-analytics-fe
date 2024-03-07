export interface ICardMemberList {
  placeholder?: string;
  subPlaceholder?: string;
  renderHeader?: JSX.Element;
  renderContent?: JSX.Element;
  className?: string;
  containerStyle?: string;
  divider?: boolean;
  customHeader?: JSX.Element;
  containerBgColor?: string;
}

export interface ICardDashboard {
  icon?: string;
  placeholder: string;
  value: string;
  profit?: boolean;
  percentage?: string;
  desc?: string;
  valueStyle?: string;
}