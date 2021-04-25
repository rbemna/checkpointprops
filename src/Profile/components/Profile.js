import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";
const Profile = ({ info, children, handleName }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        height: "680px",
        background: "white",
        boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.1)",
        padding: "60px 30px 0",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "1px 0 10px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            height: "150px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          {children}
        </div>
        <div
          style={{
            marginTop: "180px",
            background: "white",
            padding: "25px 25px 40px",
          }}
        >
          <h1>{info.fullName}</h1>
          <h3 style={{ color: "#999" }}>{info.profession}</h3>
          <p>{info.bio}</p>
        </div>
      </div>
      <div style={{ marginTop: "15px", alignItems: "center" }}>
        <button onClick={(e) => handleName(`the name is ${info.fullName}`)}>
          click me!
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
