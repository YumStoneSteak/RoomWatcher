const StateBtn = ({ roomState, onChange }) => {
  return (
    <footer
      className="state-container"
      style={{
        width: "100%",
        height: "140px",
        backgroundColor: "#888",
      }}
    >
      <button
        className="state-btn"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: roomState === "회의 중" ? "#f61414" : "#888",
          transition: "background-color 0.2s ease-in-out",
        }}
        onClick={onChange}
      >
        <span
          className="state"
          style={{
            width: "369px",
            height: "100%",
            fontSize: "68px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {roomState}
        </span>
      </button>
    </footer>
  );
};

export default StateBtn;
