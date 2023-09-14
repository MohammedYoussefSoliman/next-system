import React from "react";
import isEmpty from "lodash/isEmpty";
import { useWatch } from "react-hook-form";
import { PasswordProgress } from "../Inputs.types";
import Typography from "@/components/Typography";

type StrengthIndexes = 0 | 1 | 2 | 3 | 4;

const strengthReference = {
  0: {
    strength: "",
    color: "bg-gray-300",
    textColor: "text-gray-400",
    value: 0,
  },
  1: {
    strength: "weak",
    color: "bg-red-400",
    textColor: "text-red-500",
    value: 0,
  },
  2: {
    strength: "average",
    color: "bg-orange-300",
    textColor: "text-orange-400",
    value: 25,
  },
  3: {
    strength: "good",
    color: "bg-lime-500",
    textColor: "text-lime-500",
    value: 50,
  },
  4: {
    strength: "strong",
    color: "bg-green-500",
    textColor: "text-green-600",
    value: 75,
  },
};
const matches = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/];

const colorStrength = (index: StrengthIndexes, value: number) => {
  switch (index) {
    case 0:
      return true;
    case 1:
      return value >= 25;
    case 2:
      return value >= 50;
    case 3:
      return value >= 75;
    case 4:
      return value >= 75;
    default:
      return true;
  }
};

export default function PasswordStrength({ control, name }: PasswordProgress) {
  const value = useWatch({ control, name });

  const [currentProgress, setCurrentProgress] = React.useState(
    strengthReference[0]
  );

  React.useEffect(() => {
    let progress = 0;
    if (value && !isEmpty(value)) {
      const calculatedProgress = matches.reduce((current, match) => {
        if (match.test(value)) {
          return current + 1;
        }
        return current;
      }, 0);
      progress = calculatedProgress;
    }
    setCurrentProgress(
      strengthReference[progress ? (progress as StrengthIndexes) : 0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const initialStrength = strengthReference[0];

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-4 w-full">
        {matches.map((_, index) => (
          <div
            key={`pwbar-${index}`}
            className={`h-0.5 flex-1 ${
              colorStrength(index as StrengthIndexes, currentProgress.value)
                ? currentProgress.color
                : initialStrength.color
            }`}
          />
        ))}
      </div>
      <Typography
        as="p2"
        text={currentProgress.strength}
        capitalizeFirstLetter
        className={`${currentProgress.textColor} font-md`}
      />
    </div>
  );
}
