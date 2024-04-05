import React from "react";
import {AccessData} from "../Access";

export interface AccessLinkData extends AccessData {
  url?: string;
}

export default function AccessLink({children, className, url}: AccessLinkData) {
  return (
    <a href={url} className={`list-group-item ${className ? className : ""}`}>
      {children}
    </a>
  );
}

//Añadir informacion en caso de usar link de next js o gatsby
