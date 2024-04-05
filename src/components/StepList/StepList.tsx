import React from "react";
import {Sizes} from "../../utils/utils";

interface StepListData {
  size?: Sizes;
  isLight?: boolean;
  isNumber?: boolean;
  stepsList: {title: string; description: string}[];
}

export default function StepList({
  size,
  stepsList,
  isLight,
  isNumber,
}: StepListData) {
  // Clases CSS condicionales basadas en las props
  const itemClass =
    size === "large"
      ? "list-steps-lg"
      : size === "small"
        ? "list-steps-sm"
        : "";
  const lightClass = isLight ? "list-steps-light" : "";
  const numberClass = isNumber ? "list-steps-numbers" : "";

  // Concatenar todas las clases condicionales
  const classNames = `list-steps ${itemClass} ${lightClass} ${numberClass}`;

  return (
    <ul className={classNames}>
      {stepsList.map((step, index) => (
        <li key={index} className="list-steps-item">
          <h4>{step.title}</h4>
          <p>{step.description}</p>
        </li>
      ))}
    </ul>
  );
}
