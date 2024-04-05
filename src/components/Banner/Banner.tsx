import React from "react";

interface BannerData {
  children: React.ReactNode;
  iconBanner: string;
  description: React.ReactNode;
  isDark?: boolean;
}

export default function Banner({
  children,
  iconBanner,
  description,
  isDark,
}: BannerData) {
  const bannerClass = isDark ? "banner banner-dark" : "banner";

  return (
    <div className={bannerClass}>
      <div className="banner-content">
        {iconBanner && !iconBanner?.includes("bx") && (
          <span className="material-icons-round">{iconBanner}</span>
        )}
        {iconBanner && iconBanner?.includes("bx") && (
          <i className={iconBanner}></i>
        )}
        <p className="banner-text">{description}</p>
        <div className="banner-actions">{children}</div>
      </div>
    </div>
  );
}
