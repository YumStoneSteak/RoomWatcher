import React from "react";

const TimeSection = ({ time }) => (
  <section
    className="timeLine"
    style={{
      position: "relative",
      width: "1120px",
      height: "82px",
      flexGrow: 0,
    }}
  >
    <span
      className="time"
      style={{
        width: "112px",
        height: "41px",
        flexGrow: 0,
        margin: "0 0 46px 0",
        fontFamily: "Pretendard-Regular",
        fontSize: "34px",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#3b3b3b",
      }}
    >
      {time}
    </span>
    <div
      className="line-start"
      style={{
        position: "absolute",
        top: "13px",
        right: 0,
        width: "972px",
        height: "3px",
        flexGrow: 0,
        backgroundColor: "#dfdfdf",
      }}
    />
    <div
      className="line-end"
      style={{
        position: "absolute",
        top: "79px",
        right: 0,
        width: "972px",
        height: "3px",
        flexGrow: 0,
        backgroundColor: "#dfdfdf",
      }}
    />
  </section>
);

const Time = () => {
  const times = [
    "오전 8시",
    "오전 9시",
    "오전 10시",
    "오전 11시",
    "정오",
    "오후 1시",
    "오후 2시",
    "오후 3시",
    "오후 4시",
    "오후 5시",
    "오후 6시",
  ];
  return (
    <article
      className="schedule-container"
      style={{ width: "100%", height: "1463px", padding: "30px 0 0" }}
    >
      <div
        className="schedule-frame"
        style={{
          width: "1120px",
          height: "1491px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "50px",
          margin: "0 40px 15px",
          padding: 0,
        }}
      >
        {times.map((time) => (
          <TimeSection key={time} time={time} />
        ))}
      </div>
    </article>
  );
};

export default Time;
