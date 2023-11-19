import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "10%",
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            fill="#ffffff"
            fontSize={32}
            transform="rotate(270)"
          >
            <path d="M32 384H24c-13.3 0-24-10.7-24-24V328 184 152c0-13.3 10.7-24 24-24h8V80c0-26.5 21.5-48 48-48h50c40.6 0 80.4 11 115.2 31.9L405.3 160H456c69.3 0 135 22.7 179.2 81.6c6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352H405.3L245.2 448.1C210.4 469 170.6 480 130 480H80c-26.5 0-48-21.5-48-48V384zm280-32H168c-9.9 13.2-23.9 23.3-40 28.3V432h2c31.9 0 63.2-8.7 90.6-25.1L312 352zm0-192l-91.5-54.9C193.2 88.7 161.9 80 130 80h-2v51.7c16.1 5.1 30.1 15.1 40 28.3H312zM48 184V328v8h56c12.7 0 23.8-7.4 28.9-18.3c4-8.4 12.4-13.7 21.7-13.7H456c32.6 0 62.4-5.8 88-18.5V226.5c-25.6-12.6-55.4-18.5-88-18.5H154.6c-9.3 0-17.7-5.3-21.7-13.7C127.8 183.4 116.7 176 104 176H48v8zm416 40c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            fill="#ffffff"            
            fontSize={32}    
            transform="rotate(270)"        
          >
            <path d="M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96h2zM352 128L245.2 63.9C210.4 43 170.6 32 130 32h-2v96l224 0zM96 128l0-96H80C53.5 32 32 53.5 32 80v48h8c-22.1 0-40 17.9-40 40v16V328v16c0 22.1 17.9 40 40 40H32v48c0 26.5 21.5 48 48 48H96l0-96h8c26.2 0 49.4-12.6 64-32H456c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6v24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4V212.4c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z" />
          </svg>
        </Link>
        <Link to="/logging">
          <h3>Logging</h3>
        </Link>
        <Icon variant="rocket" size="sm" color="white" />
      </div>
    </div>
  );
}
