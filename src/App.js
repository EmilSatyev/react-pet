import LoginForm from "./components/LoginForm";
import React from "react";

function App() {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
