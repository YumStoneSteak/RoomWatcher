const RoomName = ({ roomName, onChange, roomType }) => {
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
      <select
        value={roomName}
        onChange={(e) => onChange(e.target.value)}
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
          background: "#292929",
          border: "none",
          outline: "none",
          appearance: "none",
          cursor: "pointer",
        }}
      >
        {roomType.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </header>
  );
};

export default RoomName;
