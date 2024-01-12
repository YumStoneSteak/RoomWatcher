import dayjs from "dayjs";

const dummyDate = "2024-01-01"; // 기준 날짜 설정
const calculateTop = (startTm) => {
  const baseTime = dayjs(`${dummyDate} 08:00`); // 기준 시간 (오전 8시)
  const startTime = dayjs(`${dummyDate} ${startTm}`);

  const diffMinutes = startTime.diff(baseTime, "minute");
  const diffHours = diffMinutes / 60;

  const baseGap = 13;
  const hourGap = 132;

  return baseGap + hourGap * diffHours;
};

const calculateHeight = (startTm, endTm) => {
  const startTime = dayjs(`${dummyDate} ${startTm}`);
  const endTime = dayjs(`${dummyDate} ${endTm}`);

  const diffMinutes = endTime.diff(startTime, "minute");
  const diffHours = diffMinutes / 60;

  const hourGap = 132;
  return hourGap * diffHours;
};

// 회의 일정 컴포넌트
const MeetingSchedule = (props) => {
  const { department, title, startTm, endTm, registrant } = props;
  const topPx = calculateTop(startTm);
  const heightPx = calculateHeight(startTm, endTm);

  const scheduleStyle = {
    position: "absolute",
    top: topPx + `px`,
    left: "158px",
    width: "952px",
    height: heightPx + "px",
    objectFit: "contain",
    borderRadius: "20px",
    boxShadow: "0 4px 4px 0 rgba(156, 156, 156, 0.25)",
    backgroundColor: "#fff",
    zIndex: 2,
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div key={title} style={scheduleStyle}>
      <span
        className="dept-title"
        style={{
          width: "402px",
          height: "41px",
          fontFamily: "Pretendard-Regular",
          fontSize: "34px",
          fontWeight: 500,
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          color: "#000",
        }}
      >
        [{department}] {title}
      </span>
      <span
        className="startTm-endTm"
        style={{
          width: "167px",
          height: "33px",
          flexGrow: 0,
          fontFamily: "Pretendard-Regular",
          fontSize: "28px",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          color: "#878787",
        }}
      >
        {startTm}~{endTm}
      </span>
      <span
        className="registrant"
        style={{
          height: "33px",
          flexGrow: 0,
          fontFamily: "Pretendard-Regular",
          fontSize: "28px",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          color: "#878787",
        }}
      >
        {registrant}
      </span>
    </div>
  );
};

// 시간 섹션 컴포넌트
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

// 전체 시간을 나타내는 컴포넌트
const Time = ({ data: { data } }) => {
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
      style={{
        width: "100%",
        height: "1463px",
        padding: "30px 0 0",
        backgroundColor: "#f5f6f6",
      }}
    >
      <div
        className="schedule-frame"
        style={{
          position: "relative",
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
        {data?.map((schedule) => (
          <MeetingSchedule
            key={schedule.title}
            title={schedule.title}
            startTm={schedule.startTm}
            endTm={schedule.endTm}
            department={schedule.department}
            registrant={schedule.registrant}
          />
        ))}
      </div>
    </article>
  );
};

export default Time;
