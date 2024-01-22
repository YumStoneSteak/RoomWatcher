import { useEffect, useState } from "react";
import { useSwipe } from "../utils/useSwipe";
import Date from "../components/Date";
import Time from "../components/Time";
import StateBtn from "../components/footer/StateBtn";
import RoomName from "../components/header/RoomName";
import useInterval from "../utils/useInterval";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const Schedule = () => {
  const roomType = ["2층 회의실", "3층 회의실"]; //hardcoding
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [roomName, setRoomName] = useState(roomType[1]);
  const [leftAnimation, setLeftAnimation] = useState("");
  const [rightAnimation, setRightAnimation] = useState("");
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [manualClosedMeetings, setManualClosedMeetings] = useState([]);
  const [roomState, setRoomState] = useState("회의실 체크인");

  useEffect(() => {
    const updateDate = () => {
      if (dayjs().hour() === 0) {
        setCurrentDate(dayjs());
      }
    };

    const fetchData = () => {
      fetch("/meetingRoom/get", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error("데이터 패치 에러:", error));
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
      updateDate();
    }, 1000 * 60 * 3);

    const getQueryRoomNm = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const roomNm = queryParams.get("roomNm");

      if (roomNm) {
        setRoomName(roomNm);
      }
    };

    getQueryRoomNm();

    return () => clearInterval(interval);
  }, []);

  const filterData = () =>
    data?.data.data
      .filter((item) => {
        return (
          dayjs(item.meetingDt).format("YYYY-MM-DD") ===
            currentDate.format("YYYY-MM-DD") &&
          item.roomNm === roomName &&
          item.endTm.slice(0, 2) <= 20
        );
      })
      .map((item) => {
        const now = dayjs();
        const startDateTime = dayjs(item.meetingDt + " " + item.startTm);
        const endDateTime = dayjs(item.meetingDt + " " + item.endTm);
        const isManualClosed = manualClosedMeetings.includes(item.regDt);

        let meetingState = "";
        if (now.isBefore(startDateTime)) {
          meetingState = "upcoming";
        } else if (now.isAfter(endDateTime)) {
          meetingState = "end";
        } else {
          meetingState = "inMeeting";
        }

        return {
          ...item,
          meetingState,
          manualClosed: isManualClosed,
        };
      });

  useInterval(() => {
    setFilteredData(filterData());

    const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    let isMeetingStarted = false;
    let isMeetingEnded = false;

    filteredData?.forEach((d) => {
      const startDateTime = dayjs(d.meetingDt + d.startTm).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      const endDateTime = dayjs(d.meetingDt + d.endTm).format(
        "YYYY-MM-DD HH:mm:ss"
      );

      if (startDateTime === currentTime) {
        isMeetingStarted = true;
      }

      if (endDateTime === currentTime) {
        isMeetingEnded = true;
      }
    });

    if (isMeetingStarted && isMeetingEnded) {
      setRoomState("회의 중");
    } else if (isMeetingStarted) {
      setRoomState("회의 중");
    } else if (isMeetingEnded) {
      setRoomState("회의실 체크인");
    }
  }, 1000 * 0.1);

  const handleRoomChange = (newRoom) => {
    setRoomName(newRoom);
  };

  const handlePrevClick = () => {
    setLeftAnimation("move-left");
    const prevDate = currentDate.subtract(1, "day");

    if (prevDate.isBefore(dayjs(), "month")) {
      alert(dayjs().format("M") + "월의 회의 목록만 조회 가능합니다.");
    } else {
      setCurrentDate(prevDate);
    }
    setTimeout(() => setLeftAnimation(""), 300);
  };

  const handleDateClick = () => {
    setLeftAnimation("move-left");
    setRightAnimation("move-right");
    setCurrentDate(dayjs());
    setTimeout(() => {
      setLeftAnimation("");
      setRightAnimation("");
    }, 300);
  };

  const handleNextClick = () => {
    setRightAnimation("move-right");
    const nextDate = currentDate.add(1, "day");

    if (nextDate.isAfter(dayjs(), "month")) {
      alert(dayjs().format("M") + "월의 회의 목록만 조회 가능합니다.");
    } else {
      setCurrentDate(nextDate);
    }
    setTimeout(() => setRightAnimation(""), 300);
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(
    handlePrevClick,
    handleNextClick
  );

  const handleStateChange = () => {
    if (roomState === "회의 중") {
      filteredData?.forEach((meeting) => {
        if (meeting.meetingState === "inMeeting") {
          setManualClosedMeetings((data) => [...data, meeting.regDt]);
        }
      });
      setRoomState("회의실 체크인");
    } else if (roomState === "회의실 체크인") {
      filteredData?.forEach((meeting) => {
        if (meeting.meetingState === "inMeeting" && meeting.manualClosed) {
          setManualClosedMeetings(() => []);
        }
      });
      setRoomState("회의 중");
    }
  };

  return (
    <div className="wrapper">
      <RoomName
        roomName={roomName}
        onChange={handleRoomChange}
        roomType={roomType}
      />
      <main className="main">
        <Date
          currentDate={currentDate}
          handlePrevClick={handlePrevClick}
          handleDateClick={handleDateClick}
          handleNextClick={handleNextClick}
          leftAnimation={leftAnimation}
          rightAnimation={rightAnimation}
        />
        <span
          className="touch-area"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Time data={filteredData} />
        </span>
      </main>
      <StateBtn roomState={roomState} onChange={handleStateChange} />
    </div>
  );
};

export default Schedule;
