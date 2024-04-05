import React, {ReactNode} from "react";
import {Sizes} from "../../utils/utils.js";
import "./Access.scss";
import AccessLink from "./AccessLink/AccessLink";
import AccessContent from "./AccessContent/AccessContent";
import AccessTitle from "./AccessTitle/AccessTitle";
import Accessdescription from "./AccessDescription/AccessDescription";

export interface AccessData {
  size?: Sizes;
  className?: string;
  children?: ReactNode | ReactNode[];
}

export default function Access({size}: AccessData) {
  const itemClass = size === "small" ? "item-sm" : "";

  return (
    <AccessLink url="www.google.com" className={itemClass}>
      <span className="material-icons-round">face</span>
      <AccessContent>
        <AccessTitle title="Titulo de ejemplo" />
        <Accessdescription description="Descripcion de ejmplo" />
      </AccessContent>
    </AccessLink>
  );
}

{
  /* <Access size="small" />
<Access /> */
}
