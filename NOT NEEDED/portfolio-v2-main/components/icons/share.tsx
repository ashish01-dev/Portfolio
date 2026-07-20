import React from "react";

type Props = React.ComponentProps<"svg">;

const Share = (props: Props) => {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          d="m2.5,15s.974-3.5,5.5-3.5v3.5s4.5-5,4.5-5l-4.5-5v3.5c-5.5,0-5.5,6.5-5.5,6.5Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          d="m13,15l4.5-5-4.5-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </g>
    </svg>
  );
};

export default Share;
