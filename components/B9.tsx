import React from "react";
import BaseAlert from "./BaseAlert";
export default function B9() {
  return (
    <div>
      <h2>B9</h2>
      <BaseAlert type="success">Success Text</BaseAlert>
      <BaseAlert type="info">Info Text</BaseAlert>
      <BaseAlert type="warning">Warning Text</BaseAlert>
      <BaseAlert type="error">Error Text</BaseAlert>
    </div>
  );
}
