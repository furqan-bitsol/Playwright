"use client";
import React from "react";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer: React.FC<TimerProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  const timeUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="flex gap-4 text-black whitespace-nowrap min-w-60 w-[302px]">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="min-h-[50px]">
            <div className="text-xs font-medium">{unit.label}</div>
            <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
              {unit.value.toString().padStart(2, "0")}
            </div>
          </div>
          {index < timeUnits.length - 1 && (
            <div className="flex self-end mt-7 min-h-4">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
