import React from "react";
import Input from "./Input"
function Login(){
  return (
    <div>
<form className="form">
      {/* <input type="text" placeholder="Username" /> */}
      <Input 
type="text"
placeholder="username"
      />
      <Input type="password"
      placeholder="password"
      />
       <Input type="password"
      placeholder="confirm password"
      />
     
      <button type="submit">Register</button>
    </form>
    </div>
  );
}
export default Login