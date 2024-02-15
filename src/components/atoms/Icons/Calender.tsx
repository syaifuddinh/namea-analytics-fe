import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconCalender: React.FC<IIconProps> = ({
  size = IconSize.md,
  className,
}) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles(size, className)}
    >
      <path
        d="M7.5 5.333H7c-.7 0-1.05 0-1.318.146a1.294 1.294 0 00-.546.582C5 6.346 5 6.721 5 7.467V8m2.5-2.667h5m-5 0V4m5 1.333h.5c.7 0 1.05 0 1.317.146.235.127.427.331.547.582.136.285.136.658.136 1.404V8m-2.5-2.667V4M5 8v5.867c0 .746 0 1.12.136 1.405.12.25.311.455.546.583C5.95 16 6.3 16 6.998 16h6.004c.699 0 1.048 0 1.315-.145.235-.128.427-.332.547-.583.136-.285.136-.658.136-1.403V8M5 8h10m-2.5 5.333h.001v.002H12.5v-.002zm-2.5 0h.001v.002H10v-.002zm-2.5 0h.001v.002H7.5v-.002zm5.001-2.666v.001H12.5v-.001h.001zm-2.501 0h.001v.001H10v-.001zm-2.5 0h.001v.001H7.5v-.001z"
        stroke="#CDFBFF"
        strokeOpacity={0.6}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
