const RoomName = ({ roomName }) => {
  return (
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
        value={roomName}
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
  );
};

export default RoomName;
