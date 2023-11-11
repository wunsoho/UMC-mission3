import React from "react";

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }
  
    handleLoginClick = () => {
        this.setState ({
            isLoggedIn: true,
        });
    }

    handleLogoutClick = () => {
        this.setState ({
            isLoggedIn: false,
        });
    }
  
    render() {
        const { isLoggedIn } = this.state;
        const buttonClass = isLoggedIn ? "logout-btn" : "login-btn";
        const buttonText = isLoggedIn ? "로그아웃" : "로그인";
        const handleClick = isLoggedIn ? this.handleLogoutClick : this.handleLoginClick;
    
        return (
          <div style={{color: "white"}}>
            <p><button style={{ margin: "1vw", borderRadius: "20px", width:"5vw", height:"5vh" }}className={buttonClass} onClick={handleClick}>{buttonText}</button>
            {isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</p>
          </div>
        );
    }
}
