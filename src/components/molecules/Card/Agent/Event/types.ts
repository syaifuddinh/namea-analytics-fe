export interface ICardInfoEvent {
  image: string;
  placeholder: string;
  desc: string;
  promoPeriod: string;
  revenueGenerated: string;
  statusEvent: string;
}

export interface ICardInfoEventDetail {
  createdBy: string;
  promotionType: string;
  include: string;
  bonusAmount: string;
  turnoverMultiplier: string;
  minDeposit: string;
  maxDeposit: string;
  minBonus: string;
  maxBonus: string;
}

export interface ICardEvent {
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
