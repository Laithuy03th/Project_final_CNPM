import React, { useState } from 'react';
import "E:\CNPM\Project\Code\Thuy\sign_in\style.css"; // Đường dẫn tới file CSS của bạn

// SocialIcons Component
const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
      <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
      <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
    </div>
  );
};

// FormComponent cho phần Sign In và Sign Up
const FormComponent = ({ isSignUp, handleSignInClick }) => {
  return (
    <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
      <form>
        <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
        <SocialIcons />
        <span>{isSignUp ? 'or use your email for registration' : 'or use your email and password'}</span>
        <input type="text" placeholder={isSignUp ? 'Name' : 'Email'} />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {isSignUp ? (
          <button type="button" onClick={handleSignInClick}>Sign In</button>
        ) : (
          <>
            <a href="#">Forget Your Password?</a>
            <button type="button">Sign In</button>
          </>
        )}
      </form>
    </div>
  );
};

// TogglePanel Component
const TogglePanel = ({ handleRegisterClick, handleLoginClick }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button className="hidden" onClick={handleLoginClick}>Sign In</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

// LoginPage Component tổng thể
const LoginPage = () => {
  const [isActive, setIsActive] = useState(false); // Quản lý trạng thái chuyển đổi giữa đăng nhập và đăng ký

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleSignInClick = () => {
    window.location.href = 'file:///E:/CNPM/Project/Code/Thuy/menu/menu.html'; // Điều hướng tới trang khác
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      {/* Component form Sign Up */}
      <FormComponent isSignUp={true} handleSignInClick={handleSignInClick} />
      
      {/* Component form Sign In */}
      <FormComponent isSignUp={false} />
      
      {/* Component Toggle Panel */}
      <TogglePanel handleRegisterClick={handleRegisterClick} handleLoginClick={handleLoginClick} />
    </div>
  );
};

export default LoginPage;
