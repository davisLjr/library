import React from "react";
import {BlockData} from "../Block";

export interface BlockDescriptionData extends BlockData {
  description: string;
}

export default function BlockDescription({
  description,
  className,
}: BlockDescriptionData) {
  return (
    <p className={`block-text ${className ? className : ""}`}>{description}</p>
  );
}
// Remplazar cuando tenga el componente tipografia
