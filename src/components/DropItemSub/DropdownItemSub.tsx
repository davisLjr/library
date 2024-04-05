import React from "react";

function getIcon(icon: string) {
  if (icon?.includes("bx")) {
    return <i className={icon}></i>;
  } else {
    return <span className="material-icons-round">{icon}</span>;
  }
}

// Items

interface ItemsData {
  title: string;
  iconLeft?: string;
  iconRight?: string;
  align?: "right" | "left";
  link: string;
  disabled?: boolean;
}

const ItemsSub: React.FC<ItemsData> = ({
  title,
  iconLeft,
  iconRight,
  align,
  link,
  disabled = false,
}) => {
  return (
    <a
      className={`dropdown-item sub-item${disabled ? " disabled" : ""}`}
      href={link}
    >
      {iconLeft && getIcon(iconLeft)}
      <span className={`item-text${align === "right" ? " text-right" : ""}`}>
        {title}
      </span>
      {iconRight && getIcon(iconRight)}
    </a>
  );
};

export default ItemsSub;
