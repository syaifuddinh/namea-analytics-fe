export interface ICardDashboard {
  icon?: string;
  placeholder: string;
  value: string;
  profit?: boolean;
  percentage?: string;
  desc?: string;
  valueStyle?: string;
}

export interface ICardTop {
  logo?: string;
  icon?: JSX.Element;
  placeholder: string;
  value: string;
  barValue: number;
  className?: string;
}

export interface ICardProfit {
  iconDot?: boolean;
  placeholder: string;
  value: string;
  profit: boolean;
  percentage: string;
  desc?: string;
  className?: string;
}
