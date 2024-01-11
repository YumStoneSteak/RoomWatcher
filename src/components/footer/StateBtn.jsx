import React from "react";

const StateBtn = ({ roomState }) => {
  return (
    <footer
      className="state-container"
      style={{
        width: "100%",
        height: "200px",
        flexGrow: 0,
        backgroundColor: "#888",
      }}
    >
      <button
        className="state-btn"
        style={{
          width: "100%",
          height: "200px",
          flexGrow: 0,
          backgroundColor: "#888",
        }}
      >
        <span
          className="state"
          style={{
            width: "369px",
            height: "81px",
            fontFamily: "Pretendard-Regular",
            fontSize: "68px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {roomState}
        </span>
      </button>
    </footer>
  );
};

export default StateBtn;
