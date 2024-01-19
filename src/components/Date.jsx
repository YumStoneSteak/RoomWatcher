const Date = ({
  currentDate,
  handlePrevClick,
  handleDateClick,
  handleNextClick,
  leftAnimation,
  rightAnimation,
}) => {
  return (
    <nav
      className="date-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100px",
        border: "solid 1px #e0e0e0",
        backgroundColor: "#fff",
      }}
    >
      <button
        className="date-Btn"
        id="date-Left-Btn"
        style={{
          flexGrow: 1,
          backgroundColor: "inherit",
          display: "flex",
          justifyContent: "flex-end",
        }}
        onClick={() => handlePrevClick()}
      >
        <img
          src="/img/ic_arr-down-big.svg"
          className={`ic_arr-down-big ${leftAnimation}`}
          style={{ transform: "rotate(180deg)" }}
          alt="Left Arrow"
        />
      </button>
      <button
        className="date"
        style={{
          display: "inline-block",
          width: "460px",
          height: "57px",
          fontSize: "48px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#000",
          backgroundColor: "inherit",
        }}
        onClick={() => handleDateClick()}
      >
        {currentDate?.format("YYYY년 M월 D일 (ddd)")}
      </button>
      <button
        className="date-Btn"
        id="date-Right-Btn"
        style={{
          flexGrow: 1,
          backgroundColor: "inherit",
          display: "flex",
          justifyContent: "flex-start",
        }}
        onClick={() => handleNextClick()}
      >
        <img
          src="/img/ic_arr-down-big.svg"
          className={`ic_arr-down-big ${rightAnimation}`}
          alt="Right Arrow"
        />
      </button>
    </nav>
  );
};

export default Date;
