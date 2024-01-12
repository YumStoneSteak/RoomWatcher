import dayjs from "dayjs";

// 시간 계산 로직
const dummyDate = "2024-01-01"; // 기준 날짜 설정
const hourGap = 132;

const calculateTimeDifference = (startTime, endTime) => {
  return (
    dayjs(`${dummyDate} ${endTime}`).diff(
      dayjs(`${dummyDate} ${startTime}`),
      "minute"
    ) / 60
  );
};

const calculateTop = (startTm) => {
  const diffHours = calculateTimeDifference("08:00", startTm);
  return 13 + hourGap * diffHours;
};

const calculateHeight = (startTm, endTm) => {
  const diffHours = calculateTimeDifference(startTm, endTm);
  return hourGap * diffHours;
};

// 회의 일정 컴포넌트
const MeetingSchedule = (props) => {
  const { department, title, startTm, endTm, registrant } = props;
  const topPx = calculateTop(startTm);
  const heightPx = calculateHeight(startTm, endTm);

  const scheduleHelfStyle = {
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

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

  const clockSpan = () => (
    <span
      className="clock-span"
      style={{
        marginRight: "20px",
        display: "flex",
        height: "40px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="img/clock.svg"
        className="clock icon"
        style={{
          width: "40px",
          height: "40px",
          flexGrow: 0,
          objectFit: "contain",
          marginRight: "5px",
        }}
        alt="clockIcon"
      />
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
    </span>
  );

  const peopleSpan = () => (
    <span
      className="people-span"
      style={{
        marginRight: "20px",
        display: "flex",
        height: "40px",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="img/people.svg"
        className="people icon"
        style={{
          width: "40px",
          height: "40px",
          flexGrow: 0,
          objectFit: "contain",
          marginRight: "5px",
        }}
        alt="peopleIcon"
      />
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
    </span>
  );

  return (
    <>
      {heightPx === 66 ? (
        <div key={title} style={scheduleHelfStyle}>
          <section>
            <span
              className="dept-title"
              style={{
                width: "900px",
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
          </section>
          {peopleSpan()}
        </div>
      ) : (
        <div key={title} style={scheduleStyle}>
          <section className="title-section">
            <span
              className="dept-title"
              style={{
                width: "900px",
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
          </section>
          <section
            className="detail-section"
            style={{
              display: "flex",
              height: "40px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "15px",
            }}
          >
            {clockSpan()}
            {peopleSpan()}
          </section>
        </div>
      )}
    </>
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
const Time = ({ data }) => {
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
