import React from "react";

const UISvgDefectCheck = ({ x, y, width, active = false }) => {
  const activeProps = active ? {} : { filter: "url(#duotone)" };
  return (
    <svg
      x={x}
      y={y}
      height={width}
      viewBox="0 0 64 64"
      width={width}
      {...activeProps}
    >
      <g id="Device-Control">
        <path
          d="m57 21v34h-50v-34a4 4 0 0 1 4-4h42a4.009 4.009 0 0 1 4 4z"
          fill="#3d9ae2"
        />
        <path
          d="m57 21v28.63a4.054 4.054 0 0 1 -2 1.24 3.657 3.657 0 0 1 -1 .13h-18a4.017 4.017 0 0 1 -4-4v-30h21a4.009 4.009 0 0 1 4 4z"
          fill="#1e81ce"
        />
        <path
          d="m57 55h-54v4a2.006 2.006 0 0 0 2 2h54a2.006 2.006 0 0 0 2-2v-4z"
          fill="#898890"
        />
        <path
          d="m60 7v38a4.02 4.02 0 0 1 -3 3.87 3.657 3.657 0 0 1 -1 .13h-18a4.017 4.017 0 0 1 -4-4v-38a4.012 4.012 0 0 1 4-4h18a4 4 0 0 1 4 4z"
          fill="#5aaae7"
        />
        <path
          d="m53 3v3a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1-1v-3z"
          fill="#ff9811"
        />
        <path
          d="m37 55v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1-1v-2z"
          fill="#c6c5ca"
        />
        <path d="m13 27h16v10h-16z" fill="#ffd422" />
        <path d="m38 15v2 6h18v-4.64-3.36z" fill="#ffd422" />
        <path d="m37 28h20v2h-20z" fill="#3d9ae2" />
        <path d="m37 32h20v2h-20z" fill="#3d9ae2" />
        <g fill="#1e81ce">
          <path d="m12 42h18v2h-18z" />
          <path d="m12 46h18v2h-18z" />
        </g>
      </g>
    </svg>
  );
};

export default UISvgDefectCheck;
