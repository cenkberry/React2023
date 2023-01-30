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

export {
    Example1,
    Example2,
    Example3
};