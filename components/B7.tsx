import React from "react";
import "./BaseButton.module.css";
import BaseButton from "./BaseButton";
export default function B7() {
  return (
    <div>
      <h2>B7</h2>
      <BaseButton type="success">Success</BaseButton>
      <BaseButton type="warning">Warning</BaseButton>
      <BaseButton type="danger">Danger</BaseButton>
      <BaseButton type="primary">Primary</BaseButton>
    </div>
  );
}
