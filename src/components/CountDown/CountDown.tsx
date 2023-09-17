import React from "react";
import { classNames } from "@/utils";

type CountDownProps = {
  onFinish?: () => void;
  timeInSeconds?: number;
  reset?: boolean;
};

export default function CountDown({
  onFinish,
  timeInSeconds,
  reset,
}: CountDownProps) {
  const currentTime = timeInSeconds || 10;
  const [remainingTime, setRemainingTime] = React.useState(currentTime);
  // start counter
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        if (onFinish) onFinish();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onFinish, remainingTime]);

  React.useEffect(() => {
    if (reset) setRemainingTime(timeInSeconds || 10);
  }, [reset, timeInSeconds]);

  const readableTime = {
    minutes: Math.floor(remainingTime / 60),
    seconds: Math.floor(remainingTime % 60),
  };

  if (remainingTime === 0) return null;

  return (
    <p
      className={classNames([
        "text-gray-800",
        "text-lg",
        "md:text-xl",
        "xl:text-2xl",
      ])}
    >{`${readableTime.minutes < 10 ? "0" : ""}${readableTime.minutes}:${
      readableTime.seconds < 10 ? "0" : ""
    }${readableTime.seconds}`}</p>
  );
}
