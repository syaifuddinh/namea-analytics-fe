export interface ICalenderProps {
  name?: string;
  placeholder?: string;
  className?: string;
  titleStyle?: string;
  iconStyle?: string;
  onChange?(value: string): void;
}
