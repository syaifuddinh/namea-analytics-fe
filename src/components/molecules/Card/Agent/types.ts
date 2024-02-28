export interface ICardDashboard {
  icon?: string;
  placeholder: string;
  value: string;
  profit: boolean;
  percentage: string;
  desc?: string;
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
  iconDot?: JSX.Element;
  placeholder: string;
  label: string;
  profit: boolean;
  percentage: string;
  desc?: string;
  className?: string;
}
