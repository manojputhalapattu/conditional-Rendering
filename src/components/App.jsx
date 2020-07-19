import React from "react";
import Login from "./Login"

var userIsRegistered = false;
function renderconditionlly(){
  if(userIsRegistered===true){
   return  <h1>Hello</h1>
  }
  else{
    return(
    <Login/>
    );
  }
}


function App() {
  return (
    <div className="container">
      {renderconditionlly()}
    </div>
  );
}

export default App;
