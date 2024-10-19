/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { memo } from "react";

interface Child {
  value: any;
  setValue: () => void;
  color: "red" | "blue" | "green" | "orange";
}

const Child1: React.FC<Child> = ({ value, setValue, color }) => {
  console.log("child1");

  return (
    <div className="">
      <button
        className="border p-10 cursor-pointer rounded-full"
        onClick={setValue}
      >
        {value}
      </button>
      <div className="flex h-10 items-center gap-1">
        <p>color:</p>
        <div
          style={{ background: `${color}` }}
          className="w-5 h-5 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default memo(Child1);
