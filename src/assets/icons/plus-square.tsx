import React, { SVGProps } from "react";

function IconPlusSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect width="28" height="28" rx="4" fill="#CDFBFF" fill-opacity="0.06" />
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="27"
        rx="3.5"
        stroke="#CDFBFF"
        stroke-opacity="0.1"
      />
      <path
        d="M14 9.625V14M14 14V18.375M14 14H9.625M14 14H18.375"
        stroke="#CDFBFF"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default IconPlusSquare;
