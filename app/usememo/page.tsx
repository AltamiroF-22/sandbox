"use client";

import { useCallback, useMemo, useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const UseMemo = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const chooseColor = useMemo(() => {
    for (let i = 0; i < 10 ** 9; i++) {
      i += 1;
      i -= 1;
    }

    if (count1 % 2 == 0) return "red";
    if (count1 % 3 == 0) return "blue";
    if (count1 % 5 == 0) return "green";

    return "orange";
  }, [count1]);

  return (
    <div className="bg-zinc-950 h-[100vh]">
      <div className="text-white">UseMemo</div>
      <div className="w-full flex items-center h-[70vh] justify-center">
        <div className="bg-slate-950 text-white gap-1 grid-cols-2 grid-rows-2 inline-grid w-[50vw] h-[50vw]">
          <div className="border flex items-center justify-center">
            <Child1
              color={chooseColor}
              value={count1}
              setValue={handleIncrement1}
            />
          </div>
          <div className="border flex items-center justify-center">
            <Child2 value={count2} setValue={handleIncrement2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
