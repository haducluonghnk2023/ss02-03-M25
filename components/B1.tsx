import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function B1() {
  return (
    <div>
      <h2>B1</h2>
      <p className="text-blue-600">Label</p>
      <input
        type="text"
        placeholder="Placeholder"
        className="border-spacing-4"
      />
      <FontAwesomeIcon
        className="w-[20px] relative right-6 top-1"
        icon={faEye}
      />
      <p className="font-light">Helper text</p>
    </div>
  );
}
