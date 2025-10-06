"use client";

import clsx from "clsx";
import React from "react";

export default function Dropdown({ trigger, children, className }) {
  const [open, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {trigger &&
        (typeof trigger === "function" ? (
          trigger({ open, setIsOpen })
        ) : (
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            {trigger}
          </div>
        ))}

      {open && (
        <div
          className={clsx(
            "absolute right-0 mt-3 w-72 rounded-2xl bg-black backdrop-blur-md shadow-lg ring-1 ring-white/10 z-5",
            className
          )}
        >
          <div className="p-2 flex flex-col gap-2">{children}</div>
        </div>
      )}
    </div>
  );
}
