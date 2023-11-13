import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        position: "absolute",
        bottom: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        left: 0,
        right: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Link to="/">
          <h3>Overview</h3>
        </Link>
        <Link to="/logging">
          <h3>Logging</h3>
        </Link>
      </div>
    </div>
  );
}
