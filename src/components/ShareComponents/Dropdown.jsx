import React from "react";

export default function Dropdown({ className, children, dropref }) {
  return (
    <div className={className} ref={dropref}>
      {children}
    </div>
  );
}
