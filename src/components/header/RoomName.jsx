const RoomName = ({ roomName, onChange, roomType }) => {
  return (
    <header
      className="roomName-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100px",
        background: "#292929",
      }}
    >
      <select
        value={roomName}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "598px",
          height: "100%",
          fontSize: "48px",
          fontWeight: "600",
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
