// EXAMPLE 1 //
// Calling a block of html code from within a function //
function Example1() {
    return(
        <h1>Lesson 1 - This is Example  1</h1>
    )
};

// EXAMPLE 2 //
// inserting a variable within a function into an html code block //
function Example2() {
    const message = 'This is Example 2';
    return(
        <h1>Lesson 1 - {message}</h1>
    )
};


// EXAMPLE 3 //
// Adding the html code block to a variable and calling it with the arrow function //
const Example3 = () => {
    const message = 'This is Example 3';
    return(
        <h1>Lesson 1 - {message}</h1>
    )
};

// EXAMPLE 4 //
// run javascript function inside html code //
function Example4() {
    return(
        <h1>Lesson 1 - This is Example 4 - Time is {new Date().toLocaleTimeString()}</h1>
    )
}

// EXAMPLE 5 //
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
        <h1>Lesson 1 - This is Example 5 - {GenerateMessage()}</h1>
    )
}

// EXAMPLE 6 //
// Executing an object in a function with an if else condition to encapsulate it in html code //
function Example6(user) {
    if (user) {
      return <h1>Lesson 1 - This is Example 6 - {GenerateMessage()} (if/else)</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

// EXAMPLE 7 //
// taking the class name from an object and printing it into an attribute //
const MyObject = {
    classname: "ClassOfObject"
}

function Example7() {
    return(
        <h1 className={MyObject.classname}>Lesson 1 - This is Example 7 - Take a class name from Object</h1>
    )
}

export {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7
};