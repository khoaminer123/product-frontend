import React from "react";

export const ContactFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "25%",
        backgroundColor: "#EA3336",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          height: "60%",
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: "lighter",
            flexDirection: "column",
            display: "flex",
            height: "50%",
          }}
        >
          <div style={{ fontSize: "24px" }}>Save time, save money!</div>
          <div style={{ fontSize: "18px" }}>
            Sign up and we'll send the best deals to you
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", height: "50%" }}>
          <form style={{ display: "flex", width: "100%", margin: "5px" }}>
            <input
              type="text"
              placeholder="Your email address"
              style={{
                marginRight: "10px",
                width: "70%",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                width: "30%",
                backgroundColor: "#FD742C",
                color: "white",
                fontSize: "18px",
                fontWeight: "lighter",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};