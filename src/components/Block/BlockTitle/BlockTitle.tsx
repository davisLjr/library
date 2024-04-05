import React from "react";
import {BlockData} from "../Block";

export interface BlockTitleData extends BlockData {
  title: string;
}

export default function BlockTitle({title, className}: BlockTitleData) {
  return (
    <h4 className={`block-title ${className ? className : ""}`}>{title}</h4>
  );
}
// Remplazar cuando tenga el componente tipografia
