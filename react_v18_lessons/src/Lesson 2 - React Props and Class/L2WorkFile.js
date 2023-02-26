import React from 'react';

////////////////////////////////// EXAMPLE1 ////////////////////////////////////////////////
// Usage of props in React//
function ChildComponent(props) {
    return(
        <h1>Lesson 2 - This is Example 1 - {props.name} {props.surname}</h1>
    );
}
    
function Example1() {
    return (
        <div>
        <ChildComponent name="Sara"  surname="Berry" />
        <ChildComponent name="Natsy" surname="Berry"/>
        <ChildComponent name="Marry" surname="Berry"/>
        </div>
    );
}




////////////////////////////////// EXAMPLE2 ////////////////////////////////////////////////
// Usage of props in React//
function ChildComponent2(props) {
    return(
        <div>
            <h1>Lesson 2 - This is Example 2 - </h1>
            <h3>Hi! I am {props.altText}</h3>
            <img src={props.address} alt={props.altText} />
        </div>
    );
}

function Example2() {
    return (
        <div className="homer">
        <ChildComponent2 
        altText="Homer Simpson"
        address="https://vignette.wikia.nocookie.net/simpsons/images/2/28/200px-Orville_Simpson.png/revision/latest?cb=20120325155243"/>
        </div>
    );
}





////////////////////////////////// EXAMPLE3 ////////////////////////////////////////////////
// Usage of class in React//
class Example3 extends React.Component {
    constructor(props) {
        super(props);
        this.states = {
            name: 'Cenk',
            surname: 'Berry',
            date: new Date(),
            birthYear: 1988
        }
      }

    render() {
        return (
            <div>
                <h1>Lesson 2 - This is Example 3 - {this.states.name} {this.states.surname} is {this.states.date.getFullYear() - this.states.birthYear} years old.</h1>
            </div> 
        )
    }
}



////////////////////////////////// EXAMPLE4 ////////////////////////////////////////////////
// Usage of class in React//
class Example4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ["comment1","comment2","comment3"]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick(){
        this.setState({comments: []});
    }

    handleClick2(){
        let newComment = "New Comment";
        this.setState({comments: [...this.state.comments , newComment]});
    }

    render() {
        return (
            <div>
                <h1>Lesson 2 - This is Example 3 - {this.state.comments.toString()}</h1>
                <button onClick={this.handleClick}>Get Empty</button>
                <button onClick={this.handleClick2}>Add Comment</button>
            </div>
        )
    }
}



export {
    Example1,
    Example2,
    Example3,
    Example4
};