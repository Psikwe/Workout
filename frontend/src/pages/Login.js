import React from "react";
import useLogin from "../hooks/useLogin";
import workoutImg from "../../src/assets/images/workout.webp";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      {/* <div className="super-main">
        <div className="login-main">
          <div className="form-main">
            <form className="login" onSubmit={handleSubmit}>
              <h3>Login</h3>
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button disabled={isLoading}>Log in</button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
          <div>
            <img src={workoutImg} />
          </div>
        </div>
      </div> */}
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Login;
