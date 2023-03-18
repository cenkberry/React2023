import React, { useRef, useState } from 'react';

////////////////////////////////// Example 1 - useRef ////////////////////////////////////////////////
    function ExampleOfUseRef1(){
        const inputRef = useRef(null);
        const [message, setMessage] = useState(null);

        function submitInput(e){
            e.preventDefault();
            if(inputRef.current.value.length < 8){
                setMessage('Please enter your username at least 8 characters');
                inputRef.current.value = "";
            }
            else {
                setMessage('You Logged');
                inputRef.current.value = "";
            }
        }

        function clearInput(e){
            e.preventDefault();
            inputRef.current.value = "";
            setMessage("");
        }

        return(
            <div>
                <div className="exampleHeader">Example 1 - useRef</div>
                <form>
                    <input
                        onClick={() => setMessage("")}
                        type="text"
                        ref={inputRef}>
                    </input>
                    <button onClick={submitInput}>Login</button>
                    <button onClick={clearInput}>Clear</button>
                </form>
                <div>{message}</div>
            </div>
        )
    }


////////////////////////////////// Example 2 - useRef ////////////////////////////////////////////////
    function ExampleOfUseRef2(){
        const refDiv = useRef(null);
        const [divMessage, setDivMessage] = useState("This is current div...");

        function handleDiv(){
            refDiv.current.className = "newDiv";
            refDiv.current.style.color = "#fff";
            refDiv.current.style.backgroundColor = "#000";
            refDiv.current.style.border = "1px solid red";
            refDiv.current.style.textAlign = "center";
            refDiv.current.style.padding = "8px 0";
            setDivMessage("This is my new div...")
        }

        return(
            <div>
                <div className="exampleHeader">Example 2 - useRef</div>
                <div ref={refDiv}>{divMessage}</div>
                <button onClick={handleDiv}>Handle</button>
            </div>
        )
    }


export {
    ExampleOfUseRef1,
    ExampleOfUseRef2
}