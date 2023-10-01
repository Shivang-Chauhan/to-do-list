import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem('auth');
    navigate("/");
  }

  const handleSubmit = () => {
    navigate("/to-do");
  }

  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome To ListCheckr!</h1>
      <div className="button-container">
        <button className="homepage-button" onClick={handleSubmit}>
          Your To-Do List
        </button>
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
