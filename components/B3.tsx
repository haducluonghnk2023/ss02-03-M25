import React from "react";
import "./B3.modules.css";
export default function B3() {
  return (
    <div>
      <h2>B3+4</h2>
      <div>
        <h3>Form sign up</h3>
      </div>
      <div className="container">
        <label htmlFor="">Name</label>
        <br />
        <input className="int" type="text" placeholder="your name" />
      </div>
      <div className="container">
        <label htmlFor="">Email</label>
        <br />
        <input className="int" type="text" placeholder="you@company.com" />
      </div>
      <div className="container2">
        <label htmlFor="">Phone number</label>
        <br />
        <input className="int" type="text" placeholder="+84 (123) 456 789 " />
      </div>
      <div className="container3">
        <label htmlFor="">Address</label>
        <br />
        <textarea name="" id=""></textarea>
      </div>
      <p>Skills</p>
      <div className="contain">
        <div>
          <input type="checkbox" /> HTML <br />
          <input type="checkbox" /> UX Design <br />
          <input type="checkbox" /> Css
        </div>
        <div>
          <input type="checkbox" /> JavaScript <br />
          <input type="checkbox" /> ReactJs <br />
          <input type="checkbox" /> Java
        </div>
      </div>
      <div>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
}
