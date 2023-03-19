import React, { useState, useEffect } from 'react';


////////////////////////////////// useEffect - 1 ////////////////////////////////////////////////
  function ExampleOfUseEffect1() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    
      return (
        <div>
          <div className="exampleHeader">useEffect - 1</div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }



 ////////////////////////////////// useEffect - 2 ////////////////////////////////////////////////
  function ExampleOfUseEffect2() {
      const [loginStatus, isLoginStatus] = useState(false);
      const [sysMessage, setSysMessage] = useState("Please Login!");

      useEffect(() => {
          if(loginStatus){
          setSysMessage("You are Welcome!");
          }
      },[loginStatus]);

      return (
          <div>
            <div className="exampleHeader">useEffect - 2</div>
            <div>{sysMessage}</div>
            <button onClick={() => isLoginStatus(true)}>
                Login
            </button>
          </div>
      );
  }

  export {
      ExampleOfUseEffect1,
      ExampleOfUseEffect2
  };