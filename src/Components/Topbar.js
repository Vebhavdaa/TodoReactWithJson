import React from "react";
import { Navbar } from "react-bootstrap";

const Topbar = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" className="justify-content-center">
        <Navbar.Brand
          style={{
            color: "#d6e36e",
            fontWeight: "bolder",
            fontStyle: "italic",
          }}
        >
          TODO APP -
          <span
            style={{
              color: "#d6e36e",
              fontWeight: "300",
            }}
          >
            {" "}
            cuz you gotta{" "}
          </span>
          DO{" "}
          <span
            style={{
              color: "#d6e36e",
              fontWeight: "300",
            }}
          >
            what you gotta{" "}
          </span>
          DO
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Topbar;
