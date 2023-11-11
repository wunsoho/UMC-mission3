import React, { useState } from "react";

export default function LoginControl() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ color: "white" }}>
      <p>
        <button style={{margin: "1vw", borderRadius: "20px", width: "5vw", height: "5vh",}} onClick={handleLogin}>
        {isLoggedIn ? "로그아웃" : "로그인"}</button>
      {isLoggedIn ? "환영합니다!" : "로그인해주세요!"}</p>
    </div>
  );
}