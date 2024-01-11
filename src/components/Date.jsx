import React from "react";

const Date = ({ date }) => {
  return (
    <nav
      className="date-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "124px",
        border: "solid 1px #e0e0e0",
        backgroundColor: "#fff",
      }}
    >
      <button
        className="date-Btn"
        id="date-Left-Btn"
        style={{ backgroundColor: "inherit" }}
      >
        {/* 이미지 태그 및 소스는 프로젝트에 맞게 수정 */}
        <img
          src="/img/ic_arr-down-big.svg"
          className="ic_arr-down-big"
          style={{ transform: "rotate(180deg)" }}
          alt="Left Arrow"
        />
      </button>
      <span
        className="date"
        style={{
          width: "450px",
          height: "57px",
          flexGrow: 0,
          margin: "3px 40px 4px",
          fontFamily: "Pretendard-Regular",
          fontSize: "48px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          color: "#000",
        }}
      >
        {date}
      </span>
      <button
        className="date-Btn"
        id="date-Right-Btn"
        style={{ backgroundColor: "inherit" }}
      >
        {/* 이미지 태그 및 소스는 프로젝트에 맞게 수정 */}
        <img
          src="/img/ic_arr-down-big.svg"
          className="ic_arr-down-big"
          alt="Right Arrow"
        />
      </button>
    </nav>
  );
};

export default Date;
