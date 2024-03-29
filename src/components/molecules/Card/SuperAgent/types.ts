export interface ICardDashboard {
  icon: string;
  placeholder: string;
  value: string;
  profit: boolean;
  percentage: string;
  className?: string;
  imgStyle?: string;
  valueStyle?: string;
}

export interface ICardDashboardAgent {
  icon: string;
  value: string;
  placeholder: string;
}

export interface ICardListSuperAgent {
  id: string;
  rank: number;
  image: string;
  codeAgent: string;
  nameAgent: string;
  totalAgent: number;
  totalProfit: string;
  status: string;
}

export interface ICardListAgent {
  id?: number;
  rank: number;
  image: string;
  codeAgent: string;
  nameAgent: string;
  bitcoin: {
    profit: boolean;
    nominal: string;
  };
  ethereum: {
    profit: boolean;
    nominal: string;
  };
  totalTurnOver: {
    profit: boolean;
    nominal: string;
  };
  totalProfit: {
    profit: boolean;
    nominal: string;
  };
  status: string;
}
