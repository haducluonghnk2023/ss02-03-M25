import React from "react";
import BaseCart from "./BaseCart";
import BaseButton from "./BaseButton";
export default function B10() {
  return (
    <div>
      <h2>B10</h2>
      <BaseCart
        content="Áo phông nam mát mẻ"
        title="Áo phông nam"
        image="https://momoshop.com.vn/wp-content/uploads/2020/06/ao-phong-nam-7-1.jpg"
      >
        <BaseButton type="primary">Thêm vào giỏ hàng</BaseButton>
      </BaseCart>
    </div>
  );
}
