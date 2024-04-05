import React, { ReactElement } from "react";

interface HeadingTemplateProps {
  children: ReactElement;
  id?: string;
}

const HeadingTemplate = ({ id, children }: HeadingTemplateProps) => {
  return <div className="mb-4 heading-top" id={id}>{children}</div>;
};

export default HeadingTemplate;
