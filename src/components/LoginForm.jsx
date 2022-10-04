import React from "react";

const LoginForm = ({ onSubmit }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input ref={emailRef} id="email" type="email" />
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} id="password" type="password" />
      <br />
      <button>Send</button>
    </form>
  );
};

export default LoginForm;
