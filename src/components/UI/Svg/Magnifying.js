import React from "react";

const UISvgMagnifying = ({ x, y, width, active = false }) => {
  const activeProps = active ? {} : { filter: "url(#duotone)" };
  return (
    <svg
      x={x + width / 10}
      y={y}
      enableBackground="new 0 0 64 64"
      height={width}
      viewBox="0 0 64 64"
      width={width}
      {...activeProps}
    >
      <g>
        <path
          d="m44 15 11.964-11.964c.664-.664 1.563-1.036 2.5-1.036 1.953 0 3.536 1.583 3.536 3.536 0 .938-.372 1.837-1.036 2.5l-11.964 11.964z"
          fill="#c18e59"
        />
        <path d="m48 19-3 3-3-3 3-3" fill="#4d5d7a" />
        <path
          d="m44 24h-40c-1.105 0-2 .895-2 2v26c0 1.105.895 2 2 2h40c1.105 0 2-.895 2-2v-26c0-1.105-.895-2-2-2z"
          fill="#4d5d7a"
        />
        <path
          d="m2 26v18.305c3.534 1.091 7.42 1.695 11.5 1.695 16.292 0 29.5-9.626 29.5-21.5 0-.168-.012-.333-.017-.5h-38.983c-1.105 0-2 .895-2 2z"
          fill="#8892a0"
        />
        <circle cx="35" cy="29" fill="#a1cdfb" r="13" />
        <circle cx="35" cy="29" fill="#c7e2fc" r="9" />
        <path d="m28 58-2-4h-4l-2 4" fill="#8892a0" />
        <path
          d="m34 62h-20v-2c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2z"
          fill="#4d5d7a"
        />
        <g>
          <path
            d="m35 39c-5.514 0-10-4.486-10-10h2c0 4.411 3.589 8 8 8z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m45 29h-2c0-4.411-3.589-8-8-8v-2c5.514 0 10 4.486 10 10z"
            fill="#fff"
          />
        </g>
        <path
          d="m38 29h-6v2h3.586l-10.586 10.586-5.293-5.293c-.391-.391-1.023-.391-1.414 0l-14 14 1.414 1.414 13.293-13.293 5.293 5.293c.391.391 1.023.391 1.414 0l11.293-11.293v3.586h2v-6c0-.552-.448-1-1-1z"
          fill="#70ce90"
        />
      </g>
    </svg>
  );
};

export default UISvgMagnifying;
