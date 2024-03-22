export interface ICardInfoEvent {
  id: number;
  currentId: number;
  image: string;
  placeholder: string;
  desc: string;
  promoPeriod: string;
  revenueGenerated: string;
  statusEvent: string;
  showDetail?: boolean;
  onPressShow?: () => void;
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

export interface DetailEventProps {
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
  id: number;
  currentId: number;
  placeholder: string;
  desc: string;
  promoPeriod: string;
  revenueGenerated: string;
  statusEvent: string;
  detailEvent: DetailEventProps;
  showDetail?: boolean;
  onPressShow?: () => void;
}
