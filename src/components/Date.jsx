import { useEffect } from "react";

const Date = ({ currentDate, setCurrentDate }) => {
  useEffect(() => {
    setCurrentDate(currentDate);
  }, []);

  const prevDay = () => {
    setCurrentDate(currentDate.add(-1, "day"));
  };

  const nextDay = () => {
    setCurrentDate(currentDate.add(+1, "day"));
  };
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
        style={{
          backgroundColor: "inherit",
        }}
        onClick={() => prevDay()}
      >
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
          width: "460px",
          height: "57px",
          flexGrow: 0,
          margin: "0px 40px",
          fontFamily: "Pretendard-Regular",
          fontSize: "48px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "center",
          color: "#000",
        }}
      >
        {currentDate?.format("YYYY년 M월 D일 (ddd)")}
      </span>
      <button
        className="date-Btn"
        id="date-Right-Btn"
        style={{ backgroundColor: "inherit" }}
        onClick={() => nextDay()}
      >
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
