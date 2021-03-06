import React from "react";

const UISvgBinaryCheck = ({ x, y, width, active = false }) => {
  const activeProps = active ? {} : { filter: "url(#duotone)" };
  return (
    <svg
      x={x}
      y={y}
      height={width}
      viewBox="0 0 64 64"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...activeProps}
    >
      <filter id="duotone">
        <feColorMatrix
          type="matrix"
          values=".33 .33 .33 0 0
        .33 .33 .33 0 0
        .33 .33 .33 0 0
         0   0   0  1 0"
        ></feColorMatrix>
      </filter>
      <g id="Tempered_Glass-Smartphone" data-name="Tempered Glass-Smartphone">
        <rect fill="#3d9ae2" height="54" rx="4" width="30" x="5" y="7" />
        <path
          d="m35 11v46h-4a3.995 3.995 0 0 1 -4-4v-46h4a4 4 0 0 1 4 4z"
          fill="#1e81ce"
        />
        <path
          d="m26 7v3a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1-1v-3z"
          fill="#ff9811"
        />
        <path
          d="m59 7v46a4 4 0 0 1 -4 4h-22a3.995 3.995 0 0 1 -4-4v-46a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4z"
          fill="#5aaae7"
        />
        <path
          d="m50 3v3a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1-1v-3z"
          fill="#e6e7e8"
        />
        <circle cx="44" cy="51" fill="#e6e7e8" r="2" />
        <path
          d="m35 40-6 6v7a4.025 4.025 0 0 0 1.17 2.83l4.83-4.83 24-24v-11z"
          fill="#96c8ef"
        />
        <path d="m35 34-6 6v6l6-6 24-24v-6z" fill="#78b9eb" />
        <circle cx="20" cy="55" fill="#ff9811" r="2" />
      </g>
    </svg>
  );
};

export default UISvgBinaryCheck;
