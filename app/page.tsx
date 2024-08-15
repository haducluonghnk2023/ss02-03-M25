import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import B1 from "@/components/B1";
import B2 from "@/components/B2";
import B3 from "@/components/B3";
import B5 from "@/components/B5";
import B6 from "@/components/B6";
import B7 from "@/components/B7";
import B8 from "@/components/B8";
import B9 from "@/components/B9";
import B10 from "@/components/B10";
import B11 from "@/components/B11";
export default function page() {
  const options = ["HTML", "CSS", "JavaScript", "NextJS"];
  return (
    <div>
      {/* <Header />
      <Main />
      <Footer /> */}
      <B1 />
      <B2 />
      <B3 />
      <B5 />
      <B6 />
      <B7 />
      <B8 />
      <B9 />
      <B10 />
      <B11 options={options} />
    </div>
  );
}
