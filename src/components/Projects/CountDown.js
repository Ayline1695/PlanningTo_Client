import React, { useRef, useEffect, useState } from "react";

function CountDown({ DateTo }) {
  const [time, setTime] = useState(DateTo);
  const [pause, setPause] = useState(false); // pausa -> que elimine el projecto o lo deshabilite a no ser que se ponga nueva fecha
  let intervalRef = useRef();

  const decreaseNum = () => setTime((prev) => prev - 1);

  useEffect(() => {
    setPause(false);
    // baja 1s a la cantidad
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  //parar el temporizador
  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <div>
      <div>{time}</div>
    </div>
  );
}

export default CountDown;
