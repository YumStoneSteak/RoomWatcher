import { useEffect, useState } from "react";
import Date from "../components/Date";
import Time from "../components/Time";
import StateBtn from "../components/footer/StateBtn";
import RoomName from "../components/header/RoomName";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const Schedule = () => {
  const dummyData = {
    timestamp: "2024-01-12T16:49:17",
    data: [
      {
        meetingDt: "2024-01-02",
        roomNm: "2층 회의실",
        startTm: "11:00",
        endTm: "12:00",
        title: "사업기획 회의",
        registrant: "유지원",
        regDt: "2024-01-02T14:09",
        department: "R&D팀",
      },
      {
        meetingDt: "2024-01-02",
        roomNm: "2층 회의실",
        startTm: "14:30",
        endTm: "15:30",
        title: "본부장님-팀장 회의",
        registrant: "유지원",
        regDt: "2024-01-02T14:09",
        department: "R&D팀",
      },
      {
        meetingDt: "2024-01-02",
        roomNm: "3층 회의실",
        startTm: "16:00",
        endTm: "16:30",
        title: "테스트",
        registrant: "이용훈",
        regDt: "2024-01-02T14:36",
        department: "(주)드제이",
      },
      {
        meetingDt: "2024-01-03",
        roomNm: "3층 회의실",
        startTm: "21:00",
        endTm: "22:00",
        title: "테스트 일정",
        registrant: "이동혁",
        regDt: "2024-01-03T16:46",
        department: "개발2팀",
      },
      {
        meetingDt: "2024-01-03",
        roomNm: "3층 회의실",
        startTm: "19:00",
        endTm: "20:00",
        title: "test2",
        registrant: "이동혁",
        regDt: "2024-01-03T19:28",
        department: "개발2팀",
      },
      {
        meetingDt: "2024-01-04",
        roomNm: "2층 회의실",
        startTm: "10:00",
        endTm: "10:30",
        title: "어플드제이 일일보고 참석",
        registrant: "유지원",
        regDt: "2024-01-04T18:00",
        department: "R&D팀",
      },
      {
        meetingDt: "2024-01-04",
        roomNm: "3층 회의실",
        startTm: "10:00",
        endTm: "12:00",
        title: "회의실 예약 테스트",
        registrant: "이동혁",
        regDt: "2024-01-04T12:26",
        department: "개발2팀",
      },
      {
        meetingDt: "2024-01-05",
        roomNm: "2층 회의실",
        startTm: "08:00",
        endTm: "18:00",
        title: "TEST 회의실 예약",
        registrant: "이동혁",
        regDt: "2024-01-05T17:45",
        department: "개발2팀",
      },
      {
        meetingDt: "2024-01-11",
        roomNm: "2층 회의실",
        startTm: "14:00",
        endTm: "17:00",
        title: "2024 중소벤처기업 지원사업 종합설명회(온라인) 참석",
        registrant: "유지원",
        regDt: "2024-01-10T14:34",
        department: "R&D팀",
      },
    ],
  };
  const roomType = ["2층 회의실", "3층 회의실"];

  const [data, setData] = useState(null);
  const [roomName, setRoomName] = useState(roomType[0]);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [roomState, setRoomState] = useState("회의실 체크인");

  // useEffect(() => {
  //   fetch("/meetingRoom/get", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  // console.log("🚀data", data);

  const handleRoomChange = (newRoom) => {
    setRoomName(newRoom);
  };

  const filteredData = dummyData.data.filter((item) => {
    return (
      dayjs(item.meetingDt).format("YYYY-MM-DD") ===
        currentDate.format("YYYY-MM-DD") &&
      item.roomNm === roomName &&
      item.startTm.slice(0, 2) < 17
    );
  });

  const handleStateChange = () => {
    setRoomState((prevState) =>
      prevState === "회의실 체크인" ? "회의중" : "회의실 체크인"
    );
  };

  return (
    <div className="wrapper">
      <RoomName
        roomName={roomName}
        onChange={handleRoomChange}
        roomType={roomType}
      />
      <main className="main">
        <Date currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <Time data={filteredData} />
      </main>
      <StateBtn roomState={roomState} onChange={handleStateChange} />
    </div>
  );
};

export default Schedule;
