import React from "react";

export default function DummyBox({ text }) {
  return (
    <div className="dummy-container">
      <div className="dummy-box">
        <h3>{text}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
    </div>
  );
}
