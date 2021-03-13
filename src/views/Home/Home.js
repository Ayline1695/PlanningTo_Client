import React from "react";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Home;
