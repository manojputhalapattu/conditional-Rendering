import React from "react";
import Login from "./Login"
//React-use-state-update.
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
