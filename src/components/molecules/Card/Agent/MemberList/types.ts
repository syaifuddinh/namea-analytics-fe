export interface ICardMemberList {
  id?: number;
  currentId?: number;
  nameAgent: string;
  depositDate: string;
  statusAgent: string;
  showDetail?: boolean;
  onPressShow?: () => void;
}

export interface ICardInfoMember {
  id?: number;
  currentId?: number;
  image: string;
  nameAgent: string;
  depositDate: string;
  statusAgent: string;
  showDetail?: boolean;
  onPressShow?: () => void;
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
