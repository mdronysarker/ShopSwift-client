import React from "react";

export default function Image({ src, className, children }) {
  return (
    <div className="relative inline-block">
      <img src={src} className={className} alt="" />
      <div>{children}</div>
    </div>
  );
}
