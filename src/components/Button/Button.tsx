import * as React from "react";
import classNames from "classnames";
import {SizeComponents, getIcon} from "../../utils/utils";

export type ButtonType =
  | "primary"
  | "success"
  | "danger"
  | "secondary"
  | "link";

export interface ButtonProps {
  type?: ButtonType;
  isOutline?: boolean;
  text?: string;
  size?: SizeComponents;
  isExpandable?: boolean;
  icon?: string;
  hasSpinner?: boolean;
  ariaLabel?: string;
  isIconPositionRight?: boolean;
  isSpinnerPositionRight?: boolean;

  url?: string;
  target?: string;
  download?: string;

  isDisabled?: boolean;
  dataTarget?: string;
  dataToggle?: string;
  dataDismiss?: string;
}

function renderSpinner(type: ButtonType, isOutline: boolean) {
  const spinnerTypeMappings = {
    primary: "dark",
    link: "info",
    danger: "danger",
    success: "success",
    secondary: "secondary",
  };

  const spinnerType =
    (type === "secondary" || type === "danger" || type === "success") &&
    !isOutline
      ? "light"
      : spinnerTypeMappings[type];

  return (
    <div
      className={`spinner-border text-${spinnerType} spinner-border-sm`}
      role="status"
    >
      <span className="sr-only">Cargando...</span>
    </div>
  );
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {
    type = "primary",
    isOutline = false,
    text,
    size = "md",
    isExpandable = false,
    icon,
    hasSpinner = false,
    ariaLabel,
    isIconPositionRight = false,
    isSpinnerPositionRight = false,
    url,
    target,
    download,
    isDisabled,
    dataTarget,
    dataToggle,
    dataDismiss,
  } = props;

  const className = classNames(
    "btn",
    {[`btn-${type}`]: !isOutline},
    {[`btn-outline-${type}`]: isOutline},
    {[`btn-${size}`]: size !== "md"},
    {"btn-block": isExpandable},
    {"btn-icon": icon || hasSpinner},
  );

  const textContent = icon || hasSpinner ? text : text ? text : "Botón";

  const spinnerContent = renderSpinner(type, isOutline);

  const iconContent = getIcon(icon!);

  const buttonContent = (
    <React.Fragment>
      {hasSpinner && !isSpinnerPositionRight && spinnerContent}
      {icon && !isIconPositionRight && iconContent}
      {textContent}
      {icon && isIconPositionRight && iconContent}
      {hasSpinner && isSpinnerPositionRight && spinnerContent}
    </React.Fragment>
  );

  return url ? (
    <a
      className={className}
      aria-label={ariaLabel}
      href={url}
      target={target ? target : "_blank"}
      download={download}
      rel="noreferrer"
    >
      {buttonContent}
    </a>
  ) : (
    <button
      type="button"
      className={className}
      disabled={isDisabled}
      aria-label={ariaLabel}
      data-target={dataTarget ? `#${dataTarget}` : null}
      data-toggle={dataToggle}
      data-dismiss={dataDismiss}
    >
      {buttonContent}
    </button>
  );
}
