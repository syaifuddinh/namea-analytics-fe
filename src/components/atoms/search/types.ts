export interface ISearchProps {
  name?: string;
  placeholder?: string;
  className?: string;
  onChange(value: string): void;
}
