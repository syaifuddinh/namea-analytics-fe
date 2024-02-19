export interface ICardDashboard {
  id?: number;
  icon: string;
  label: string;
  nominal: string;
  revenue: {
    revenue_profit: boolean;
    revenue_percentage: string;
  };
}

export interface ICardListAgent {
  id?: number;
  rank: number;
  image: string;
  codeAgent: string;
  nameAgent: string;
  totalAgent: number;
  totalProfit: string;
  status: string;
}
