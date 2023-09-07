import React from "react";


const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#D9320E",
        width: "100%",
        height: "100px",
      }}
    >
      <div style={{ width: "77%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            height: "50%",
          }}
        >
          <div
            style={{
              marginLeft: "20px",
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Spending.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "88%",
            }}
          >
            <div
              style={{
                marginLeft: "auto",
                marginRight: "20px",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Buy anything now!
            </div>
            <button
              type="submit"
              style={{
                marginRight: "20px",
                height: "30px",
                width: "80px",
              }}
            >
              Sign in
            </button>
            <button
              type="submit"
              style={{
                height: "30px",
                width: "80px",
              }}
            >
              Sign up
            </button>
            <br />
          </div>
        </div>
        <div style={{ height: "50%" }}></div>
      </div>
    </div>
  );
};

export default Header;

