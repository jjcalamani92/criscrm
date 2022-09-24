import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const Count0 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

const useCount1 = () => {
  const [count, setCount] = useState(0)
  return [count, setCount] as any
}

export const Count1 = () => {
  const [count, setCount] = useCount1();
  return (

    <>
      {count}
      <button onClick={() => setCount((c: number) => c + 1)}>+1</button>
    </>
  );
};

const useCount2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('count is changed to', count);
  }, [count]);
  return [count, setCount] as any
}; 
export const Count2 = () => {
  const [count, setCount] = useCount2();
  return (

    <>
      {count}
      <button onClick={() => setCount((c: number) => c + 1)}>+1</button>
    </>
  );
};


const useCount3 = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);
  console.log(count);
  
  return [count, inc] as any;
};

export const Count3 = () => {
  const [count, inc] = useCount3();
  return (
    <>
      {count}
      <button onClick={() => inc()}>+1</button>
    </>
  );
};