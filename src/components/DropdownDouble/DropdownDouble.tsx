import React, {ReactNode} from "react";

interface DropdownProps {
  buttonText?: string;
  icon?: string;
  children: ReactNode;
  isExpandable?: boolean;
  menuRight?: boolean;
  dataTarget: string;
}

const DropdownDouble: React.FC<DropdownProps> = ({
  buttonText,
  icon,
  children,
  isExpandable = true,
  menuRight = false,
  dataTarget,
}) => {
  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
          data-toggle="collapse"
          data-target={`#${dataTarget}`}
          aria-controls={dataTarget}
          aria-expanded="false"
          aria-label="Toggle"
        >
          {icon && getIcon(icon)}
          {buttonText && (
            <span className="btn-dropdown-text">{buttonText}</span>
          )}
          {isExpandable && (
            <span className="material-icons-round btn-dropdown-icon">
              {isExpandable ? "expand_less" : "expand_more"}
            </span>
          )}
        </button>
        <div
          className={`dropdown-menu collapse${
            menuRight ? " dropdown-menu-right" : ""
          }`}
          id={dataTarget}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DropdownDouble;

function getIcon(icon: string) {
  if (icon?.includes("bx")) {
    return <i className={icon}></i>;
  } else {
    return <span className="material-icons-round">{icon}</span>;
  }
}
