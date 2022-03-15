import React from "react";

export default function ItemNavBar({ text, style, childStyle }) {
  return (
    <div style={{ borderBottom: "thin solid rgba(255, 255, 255, 0.151)", ...style }}>
      <h4
        style={{
          margin: 0,
          padding: ".5rem 0",
          fontSize: ".9em",
          fontWeight: "300",
          color: "rgba(255, 255, 255, 0.9)",
          ...childStyle,
        }}
      >
        {text}
      </h4>
    </div>
  );
}
