import React from "react";

export interface AlertData {
  children: React.ReactNode;
  isDimissible?: boolean;
  alertInfo?: boolean;
  alertWarning?: boolean;
  alertSuccess?: boolean;
  alertDanger?: boolean;
}

export default function Alert({
  children,
  isDimissible,
  alertInfo,
  alertWarning,
  alertSuccess,
  alertDanger,
}: AlertData) {
  if (!alertInfo && !alertWarning && !alertSuccess && !alertDanger) {
    alertInfo = true; //esta condicional asigna alert info en true al no pasarle ninguna props al componente
  }

  const classes = `alert ${alertInfo ? "alert-info" : ""} ${
    alertWarning ? "alert-primary" : ""
  } ${alertSuccess ? "alert-success" : ""} ${
    alertDanger ? "alert-danger" : ""
  }`;

  return (
    <div
      className={`${classes} ${
        isDimissible ? "alert-dismissible show fade" : ""
      }`}
      role="alert"
    >
      {children}
      {isDimissible && (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span className="material-icons-round">close</span>
        </button>
      )}
    </div>
  );
}
