import { faClock, faUpDown, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function B2() {
  return (
    <div>
      <h2>B2</h2>
      <p>Input Label</p>
      <input type="text" />
      <FontAwesomeIcon
        className="w-[15px] relative right-40 top-1"
        icon={faClock}
      />
      <FontAwesomeIcon
        className="w-[5px] relative right-7 top-0"
        icon={faUpLong}
      />
      <div className="w-[166px] border-8 border-purple-600 bg-green-300 p-3">
        <div className="flex justify-between">
          <p>Label</p>
          <input type="checkbox" checked />
        </div>
        <div className="flex justify-between">
          <p>Label</p>
          <input type="checkbox" checked />
        </div>
        <div className="flex justify-between">
          <p>Label</p>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between">
          <p>Label</p>
          <input type="checkbox" />
        </div>
        <button className="w-[60px]">Clear</button>
        <button className="w-[60px] bg-blue-500 divide-y ">Apply</button>
      </div>
    </div>
  );
}
