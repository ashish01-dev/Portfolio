"use client";

import React from "react";

type Props = React.ComponentProps<"svg">;

const Add = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 4V20M20 12H4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Add;
