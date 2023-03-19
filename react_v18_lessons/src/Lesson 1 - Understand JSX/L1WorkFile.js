////////////////////////////////// Function ////////////////////////////////////////////////
    // Calling a block of html code from within a Function //
    function Example1() {
        return(
            <div>
                <div className="exampleHeader"> Function </div>
                <h1>Function</h1>
            </div>
        )
    };


////////////////////////////////// Variable  ////////////////////////////////////////////////
    // inserting a variable within a function into an html code block //
    function Example2() {
        const message = 'Variable ';
        return(
            <div>
                <div className="exampleHeader"> Variable  </div>
                <h1>{message}</h1>
            </div>
        )
    };


////////////////////////////////// Arrow Function ////////////////////////////////////////////////
    // Adding the html code block to a variable and calling it with the arrow function //
    const Example3 = () => {

        const message = 'Arrow Function';

        return (
            <div>
                <div className="exampleHeader"> Arrow Function </div>
                <h1>{message}</h1>
            </div>
        )
    };


////////////////////////////////// Js Function  ////////////////////////////////////////////////
    // run javascript function inside html code //
    function Example4() {
        return(
            <div>
                <div className="exampleHeader"> Js Function  </div>
                <h1>Js Function - Time is {new Date().toLocaleTimeString()}</h1>
            </div>
        )
    }


////////////////////////////////// Objects ////////////////////////////////////////////////
    // executing an object in a function to encapsulate it in html code //
    const user = {
        firstName: 'Cenk',
        lastName: 'Beri'
    };

    function GenerateMessage() {
        return user.firstName + ' ' + user.lastName;
    };

    function Example5() {
        return(
            <div>
                <div className="exampleHeader"> Objects  </div>
                <h1>Objects - {GenerateMessage()}</h1>
            </div>
        )
    }


////////////////////////////////// Attributes Change ////////////////////////////////////////////////
    // taking the class name from an object and printing it into an attribute //
    const MyObject = {
        classname: "ClassOfObject"
    }

    function Example6() {
        return(
            <div>
                <div className="exampleHeader"> Attributes Change </div>
                <h1 className={MyObject.classname}>Example 6 - Take a class name from Object</h1>
            </div>
        )
    }

    
export {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6
};