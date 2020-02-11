import React from "react";

class Onboarding extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <input type="input" placeholder="username"></input>
        <br />
        <input type="input" placeholder="password"></input>
        <br />
        <button type="submit">Submit</button>
        <h1>Register</h1>
        <input type="input" placeholder="username"></input>
        <br />
        <input type="input" placeholder="password"></input>
        <br />
        <button type="submit">Register</button>
      </div>
    );
  }
}
export default Onboarding;
