"use client";
import { useState, useEffect } from "react";
interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const Countdown: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:flex gap-10 text-black  items-center justify-center">
      <div className="p-5 size-32 rounded-sm bg-white text-3xl font-bold  text-center">
        <p className="mb-2">D</p>
        <p>{timeRemaining.days}</p>
      </div>
      <div className="p-5 size-32 rounded-sm bg-white text-3xl font-bold text-center">
        <p className="mb-2">H</p>
        <p>{timeRemaining.hours}</p>
      </div>
      <div className="p-5 size-32 rounded-sm bg-white text-3xl font-bold text-center">
        <p className="mb-2">M</p>
        <p>{timeRemaining.minutes}</p>
      </div>
      <div className="p-5 size-32 rounded-sm bg-white text-3xl font-bold text-center">
        <p className="mb-2">S</p>
        <p>{timeRemaining.seconds}</p>
      </div>
    </div>
  );
};

export default Countdown;
