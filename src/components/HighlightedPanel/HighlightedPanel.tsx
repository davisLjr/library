import * as React from "react";
import classNames from "classnames";
import {PanelBgColor, PanelMedia} from "../../utils/utils";

export type HighlightedPanelType = "banner" | "grouping" | "lateral";

export type PanelIframe = {
  src: string;
  title?: string;
};

const getImage = (picture?: PanelMedia): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return (
      <img
        src={picture.src}
        alt={picture.alt || ""}
        className={picture.className || "card-img"}
        {...(picture.size && {width: picture.size, height: picture.size})}
      />
    );
  }
  return null;
};

const getVideo = (video?: PanelMedia): JSX.Element | null => {
  if (video && video.src !== undefined) {
    return (
      <video className="card-img" controls>
        <source src={video.src} type="video/mp4"></source>
        <p>Su navegador no soporta vídeos HTML5.</p>
      </video>
    );
  }
  return null;
};

const getVideoIframe = (iframe?: PanelIframe): JSX.Element | null => {
  if (iframe && iframe.src !== undefined) {
    return (
      <iframe
        className="card-img"
        src={iframe.src}
        title={iframe.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  }
  return null;
};
interface HighlightedPanelProps {
  title?: string;
  description?: string | JSX.Element;
  bgColor?: PanelBgColor;
  type?: HighlightedPanelType;
  picture?: PanelMedia;
  video?: PanelMedia;
  iframe?: PanelIframe;
}

export default function HighlightedPanel(
  props: React.PropsWithChildren<HighlightedPanelProps>,
) {
  const {
    title,
    description,
    picture,
    video,
    iframe,
    bgColor,
    children,
    type = "banner",
  } = props;

  const panelClasses = classNames(
    "card",
    "card-simple",
    `panel-${
      type === "banner"
        ? "horizontal"
        : type === "grouping"
          ? "vertical"
          : "lateral"
    }`,
  );

  const HighlightedPanelContent = (
    <div className={panelClasses.trim()}>
      {picture && getImage(picture as PanelMedia)}
      {video && getVideo(video as PanelMedia)}
      {iframe && getVideoIframe(iframe as PanelIframe)}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="card-text">{description}</p>}
        {children && <div className="panel-footer">{children}</div>}
      </div>
    </div>
  );

  if (type === "banner") {
    return (
      <div
        className={`panel-horizontal-content ${
          bgColor !== undefined ? `bg-${bgColor}` : ""
        }`.trim()}
      >
        {HighlightedPanelContent}
      </div>
    );
  } else {
    return <>{HighlightedPanelContent}</>;
  }
}
