import RoomName from "../components/header/RoomName";
import Date from "../components/Date";
import Time from "../components/Time";
import StateBtn from "../components/footer/StateBtn";

const Schedule = () => {
  const roomName = "Business Room C (소회의실)";
  const date = "2023년 12월21일 (목)";
  const roomState = ["회의실 체크인", "회의중"];

  return (
    <div className="wrapper">
      <RoomName roomName={roomName} />
      <main className="main">
        <Date date={date} />
        <Time />
      </main>
      <StateBtn roomState={roomState[0]} />
    </div>
  );
};

export default Schedule;
