import * as React from "react"

export const CashflowHeader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={40}
        height={40}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#D9D9D9"
          d="M39.5 20C39.5 9.23 30.77.5 20 .5S.5 9.23.5 20 9.23 39.5 20 39.5 39.5 30.77 39.5 20Z"
        />
      </mask>
      <g mask="url(#b)">
        <mask
          id="c"
          width={40}
          height={40}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#fff"
            d="M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20s8.954 20 20 20 20-8.954 20-20Z"
          />
        </mask>
        <g mask="url(#c)">
          <path
            fill="url(#d)"
            d="M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20s8.954 20 20 20 20-8.954 20-20Z"
          />
          <path
            fill="url(#e)"
            fillOpacity={0.64}
            d="M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20s8.954 20 20 20 20-8.954 20-20Z"
          />
        </g>
        <path
          stroke="#fff"
          strokeOpacity={0.24}
          d="M39.5 20C39.5 9.23 30.77.5 20 .5S.5 9.23.5 20 9.23 39.5 20 39.5 39.5 30.77 39.5 20Z"
        />
        <path
          fill="#fff"
          fillOpacity={0.16}
          d="M4 54c0 8.837 7.163 16 16 16s16-7.163 16-16V42c0-8.837-7.163-16-16-16S4 33.163 4 42v12Z"
        />
        <path
          fill="url(#f)"
          fillOpacity={0.32}
          d="M4 54c0 8.837 7.163 16 16 16s16-7.163 16-16V42c0-8.837-7.163-16-16-16S4 33.163 4 42v12Z"
        />
        <path
          stroke="url(#g)"
          strokeOpacity={0.2}
          d="M4.5 54c0 8.56 6.94 15.5 15.5 15.5 8.56 0 15.5-6.94 15.5-15.5V42c0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5v12Z"
        />
        <path
          fill="#fff"
          fillOpacity={0.32}
          d="M27 16a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"
        />
        <path
          fill="url(#h)"
          fillOpacity={0.32}
          d="M27 16a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"
        />
        <path
          stroke="url(#i)"
          strokeOpacity={0.2}
          d="M26.5 16a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="d"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#193A3E" />
        <stop offset={0.823} stopColor="#004952" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={20}
        x2={20}
        y1={46.625}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.203} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={19}
        x2={19}
        y1={69}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.526} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={20}
        x2={20}
        y1={9}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="i"
        x1={20}
        x2={20}
        y1={9}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.526} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <radialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 27.5 -27.5 0 20 40)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
