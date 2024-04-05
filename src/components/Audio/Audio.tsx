import React from "react";

interface AudioData {
  title: string;
  description?: string | null;
  children: React.ReactNode;
}

export default function Audio({children, title, description}: AudioData) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        {children}
      </div>
    </div>
  );
}
