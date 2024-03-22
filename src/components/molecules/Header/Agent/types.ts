export interface IHeaderProfit {
  title: string;
  category: string;
  value: string;
}

export interface IPageHeaderAgent {
  websiteName: string;
  websiteStatus: string;
  websiteUrl: string;
  onClickSection(value: number): void;
  onChangeSearch(value: string): void;
  section: number;
}

export interface ILabelSection {
  id: number;
  label: string;
  linkPath: string;
}

export interface ILabelYear {
  id: number;
  label: string;
}
