import React, { useState } from 'react';

////////////////////////////////// Conditional Rendering - 1 ////////////////////////////////////////////////
  function ExampleOfConditionalRendering1() {
    const [toggleIT , setToggleIt] = useState();

    return (
      <div>
        <div className="exampleHeader">Conditional Rendering - 1</div>
        { toggleIT && <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa?</div>}
        <button
          onClick={()=> setToggleIt(!toggleIT)}>
          Toggle
        </button>
      </div>
    );
  }


  ////////////////////////////////// Conditional Rendering - 2 ////////////////////////////////////////////////
  function ExampleOfConditionalRendering2() {
    const [showIT , setshowIt] = useState();

    return (
      <div>
        <div className="exampleHeader">Conditional Rendering - 2</div>
        { showIT 
            ? <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa?</p>
              </div>
            : <p>Do you want to see the article?</p>
        }
        <button onClick={()=> setshowIt(!showIT)}>
          { showIT 
            ? "Hide"
            : "Show"
          }
        </button>
      </div>
    );
  }


  ////////////////////////////////// Mapping ////////////////////////////////////////////////
  function ExampleOfMapping() {
    const [status, setStatus] = useState(false);
    const myArr = [
      {
        name: "Fight Club",
        year: 1999
      },
      {
        name: "Sixth Sense",
        year: 1999
      }
    ];

    return (
      <div>
        <div className="exampleHeader">Mapping</div>
        { status &&
          myArr.map((item , index) => {
            return <div key={index}>Movie {index+1} : {item.name} - {item.year}</div>
          })
        }
        <button
        onClick={()=> setStatus(!status)}>
        Map
        </button>
      </div>
    );
  }

  
////////////////////////////////// Styles ////////////////////////////////////////////////
  function ExampleOfStyles() {
    const [changeMode , setChangeMode] = useState(false);
    const styles = {
      darkMode: {
        padding: "20px",
        backgroundColor: "#000",
        color: "#fff",
        height: "200px",
        width: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      lightMode: {
        padding: "20px",
        backgroundColor: "#efefef",
        color: "#000",
        height: "200px",
        width: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }
    
    return (
      <div>
        <div className="exampleHeader">Styles</div>
        <div style={changeMode ? styles.darkMode : styles.lightMode}>This is Div..</div>
        <button
          onClick={()=> setChangeMode(!changeMode)}>
            Dark/Light Mode
        </button>
      </div>
    );
  }

  export {
    ExampleOfConditionalRendering1,
    ExampleOfConditionalRendering2,
    ExampleOfMapping,
    ExampleOfStyles
  }