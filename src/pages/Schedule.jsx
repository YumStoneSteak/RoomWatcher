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

const Schedule = () => {
  const roomName = "Business Room C (소회의실)";
  const date = "2023년 12월21일 (목)";
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
  const state = ["회의실 체크인", "회의중"];

  return (
    <div className="wrapper">
      <header
        className="roomName-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "140px",
          background: "#292929",
        }}
      >
        <p
          style={{
            width: "598px",
            height: "57px",
            fontFamily: "Pretendard-Regular",
            fontSize: "48px",
            fontWeight: "600",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {roomName}
        </p>
      </header>
      <main className="main">
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
      </main>
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
            {state[0]}
          </span>
        </button>
      </footer>
    </div>
  );
};

export default Schedule;
