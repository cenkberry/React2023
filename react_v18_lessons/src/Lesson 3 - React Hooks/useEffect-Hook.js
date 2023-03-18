import React, { useState, useEffect } from 'react';


////////////////////////////////// Example 1 - useEffect ////////////////////////////////////////////////

function ExampleOfUseEffect1() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <div className="exampleHeader">Example 1 - useEffect</div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }



 //////////////////////////////////  Example 2 - useEffect ////////////////////////////////////////////////

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
          <div className="exampleHeader">Example 2 - useEffect</div>
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