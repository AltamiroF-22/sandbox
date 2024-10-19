/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { memo } from "react";

interface Child {
  value: any;
  setValue: () => void;
}

const Child2: React.FC<Child> = ({ value, setValue }) => {
  console.log("child2");

  return (
    <button
      className="border p-10 cursor-pointer rounded-full"
      onClick={setValue}
    >
      {value}
    </button>
  );
};

export default memo(Child2);
