import React, { SVGProps } from "react";

function IconPlusSquare({ width = 28, height = 28, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      {...props}
    >
      <rect width="28" height="28" rx="4" fill="#CDFBFF" fillOpacity="0.06" />
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="27"
        rx="3.5"
        stroke="#CDFBFF"
        strokeOpacity="0.1"
      />
      <path
        d="M14 9.625V14M14 14V18.375M14 14H9.625M14 14H18.375"
        stroke="#CDFBFF"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default IconPlusSquare;
