import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Event is January 31, 2026 at 4:30 PM Central Time (UTC-6)
    // Convert to UTC: 4:30 PM CT = 10:30 PM UTC (22:30)
    const eventDate = new Date('2026-01-31T22:30:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 items-center text-primary-foreground">
      <div className="text-center">
        <div className="text-lg md:text-2xl font-bold font-display">{timeLeft.days}</div>
        <div className="text-xs uppercase">Days</div>
      </div>
      <div className="text-lg md:text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-lg md:text-2xl font-bold font-display">{timeLeft.hours}</div>
        <div className="text-xs uppercase">Hrs</div>
      </div>
      <div className="text-lg md:text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-lg md:text-2xl font-bold font-display">{timeLeft.minutes}</div>
        <div className="text-xs uppercase">Min</div>
      </div>
    </div>
  );
}
