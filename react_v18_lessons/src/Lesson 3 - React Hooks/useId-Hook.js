import React, { useId, useState, useTransition} from 'react';

//////////////////////////////////  useId ////////////////////////////////////////////////
    function ExampleOfUseId() {
        const newId = useId();
        const newId2 = useId();
        const newId3 = useId();

        return (
        <div>
            <div className="exampleHeader"> useId</div>
            <label htmlFor={newId}>Username:</label>
            <br />
            <input type="text" id={newId}></input>
            <br />
            <br />

            <label htmlFor={newId2}>Password:</label>
            <br />
            <input type="password" id={newId2}></input>
            <br />
            <br />

            <label htmlFor={`${newId3} email`}>E-mail:</label>
            <br />
            <input type="email" id={`${newId3} email`}></input>
            
        </div>
        );
    }


//////////////////////////////////  UseTransition ////////////////////////////////////////////////
    function ExampleOfUseTransition() {
        const [isPending, startTransition] = useTransition();
        const [inputVal , setInputVal] = useState("");
        const [myArr, setMyArr] = useState([])
        const MyListSize = 10000;
        // set 10.000 to see what is useTransition //

        function handleChange(e){
            setInputVal(e.target.value);
            startTransition(() => {
                const demoArr = [];
                for(let i = 0 ; i < MyListSize ; i++) {
                    demoArr.push(e.target.value);
                }
                setMyArr(demoArr);
            })
        }

        return (
            <div>
                <div className="exampleHeader"> UseTransition</div>
                <input 
                    type="text"
                    value={inputVal}
                    onClick={() => setInputVal([""])}
                    onChange={handleChange}>
                </input>
                <br />
                <button onClick={() => setMyArr([])}>Clear</button>
                <br />
                {isPending
                    ? "loading.."
                    : myArr.map((item, index) => {
                        return <div key={index}>{item}</div>
                      })
                }
            </div>
        );
    }

    export {
        ExampleOfUseId,
        ExampleOfUseTransition
    }
