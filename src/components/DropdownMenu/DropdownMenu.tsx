import React, {ReactNode} from "react";

interface DropdownMenuProps {
  buttonText?: string;
  children: ReactNode;
  subMenuRight?: boolean;
}

const DropdownSubMenu: React.FC<DropdownMenuProps> = ({
  buttonText,
  children,
  subMenuRight = false,
}) => {
  return (
    <div className="dropdown sub-dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {subMenuRight ? (
          <>
            <span className="material-icons-round btn-dropdown-icon">
              expand_more
            </span>
            <span className="item-text">{buttonText}</span>
          </>
        ) : (
          <>
            <span className="item-text">{buttonText}</span>
            <span className="material-icons-round btn-dropdown-icon">
              expand_more
            </span>
          </>
        )}
      </button>
      <div
        className={`dropdown-menu sub-dropdown-menu${
          subMenuRight ? " dropdown-menu-right" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownSubMenu;
