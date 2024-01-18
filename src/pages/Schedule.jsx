import { useCallback, useEffect, useState } from "react";
import Date from "../components/Date";
import Time from "../components/Time";
import StateBtn from "../components/footer/StateBtn";
import RoomName from "../components/header/RoomName";
import useInterval from "../utils/useInterval";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useSwipe } from "../utils/useSwipe";
dayjs.locale("ko");

const Schedule = () => {
  const roomType = ["2층 회의실", "3층 회의실"]; //hardcoding
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [roomName, setRoomName] = useState(roomType[1]);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [manualClosedMeetings, setManualClosedMeetings] = useState([]);
  const [roomState, setRoomState] = useState("회의실 체크인");

  const nextDay = useCallback(() => {
    const currentMonth = currentDate.format("M");
    const nextDate = currentDate.add(1, "day");

    if (currentMonth < nextDate.format("M")) {
      alert(currentMonth + "월의 회의 목록만 조회 가능합니다.");
    } else {
      setCurrentDate(nextDate);
    }
  }, [currentDate, setCurrentDate]);

  const currentDay = useCallback(() => {
    setCurrentDate(dayjs());
  }, [currentDate, setCurrentDate]);

  const prevDay = useCallback(() => {
    const currentMonth = currentDate.format("M");
    const prevDate = currentDate.subtract(1, "day");

    if (currentMonth < prevDate.format("M")) {
      alert(currentMonth + "월의 회의 목록만 조회 가능합니다.");
    } else {
      setCurrentDate(prevDate);
    }
  }, [currentDate, setCurrentDate]);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(
    currentDate,
    setCurrentDate,
    prevDay,
    nextDay
  );

  useEffect(() => {
    setCurrentDate(currentDate);

    const fetchData = () => {
      fetch("/meetingRoom/get", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });

      if (dayjs().hour() === 0) {
        setCurrentDate(dayjs());
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000 * 60 * 3);

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

    const startSchedule = filteredData?.filter(
      (d) =>
        dayjs(d.meetingDt + d.startTm).format("YYYY-MM-DD HH:mm:ss") ===
        dayjs().format("YYYY-MM-DD HH:mm:ss")
    );
    const endSchedule = filteredData?.filter(
      (d) =>
        dayjs(d.meetingDt + d.endTm).format("YYYY-MM-DD HH:mm:ss") ===
        dayjs().format("YYYY-MM-DD HH:mm:ss")
    );

    if (startSchedule?.length > 0) {
      setRoomState("회의 중");
    }
    if (endSchedule?.length > 0) {
      setRoomState("회의실 체크인");
    }
  }, 1000 * 0.1);

  const handleRoomChange = (newRoom) => {
    setRoomName(newRoom);
  };

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
      <main
        className="main"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Date
          currentDate={currentDate}
          prevDay={prevDay}
          currentDay={currentDay}
          nextDay={nextDay}
        />
        <Time data={filteredData} />
      </main>
      <StateBtn roomState={roomState} onChange={handleStateChange} />
    </div>
  );
};

export default Schedule;
