import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const CloseIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        stroke="#CDFBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.6}
        strokeWidth={1.5}
        d="m4 12 8-8M4 4l8 8"
      />
    </svg>
  );
};
