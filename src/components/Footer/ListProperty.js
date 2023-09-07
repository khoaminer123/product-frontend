import React from "react";

export const ListProperty = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "12.5%",
        backgroundColor: "#F68408",
      }}
    >
      <div
        style={{
          height: "49%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "30px",
            borderColor: "white",
            backgroundColor: "white",
            borderWidth: "10px",
          }}
        ></div>
      </div>
      <div
        style={{ height: "0.5%", backgroundColor: "white", width: "100%" }}
      ></div>
      <div
        style={{
            color:'white',
            fontWeight:'bold',
            alignItems:'center',
            fontSize:'12px',
            textDecoration: 'underline',
                      height: "49%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          justifyItems: "center",
          
        }}
      >
        <div style={{ marginRight:'10px' }}>About us</div>
        <div style={{ marginRight:'10px' }}>Your account</div>
        <div style={{ marginRight:'10px' }}>Make changes online to your booking</div>
        <div style={{ marginRight:'10px' }}>Customer Service Help</div>
        <div style={{ marginRight:'10px' }}>Become an affiliate</div>
        <div style={{ marginRight:'10px' }}> Booking.com for Business</div>
       
      </div>
    </div>
  );
};