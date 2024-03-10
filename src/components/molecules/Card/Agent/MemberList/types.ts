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

export interface ICardInfoMember {
  image: string;
  nameAgent: string;
  depositDate: string;
  statusAgent: string;
}

export interface LabelDayProps {
  label?: string;
  active?: boolean;
}

export interface ICardDashboard_ {
  icon?: string;
  placeholder: string;
  value: string;
  profit?: boolean;
  percentage?: string;
  desc?: string;
  valueStyle?: string;
}

export interface ICryptoProps {
  id: number;
  logo: string;
  cryptoCode: string;
  cryptoName: string;
  totalBuy: string;
}

export interface WeeklyDeposit {
  id: number;
  codeDay: string;
  deposit: string;
}
export interface IWeeklyDeposit {
  id: number;
  weekDeposit: string;
  totalDeposit: string;
  weeklyDeposit: WeeklyDeposit[];
}

export interface ICardRecentMarkets {
  data: ICryptoProps[];
}

export interface ICardWeeklyDeposit {
  data: IWeeklyDeposit[];
}
