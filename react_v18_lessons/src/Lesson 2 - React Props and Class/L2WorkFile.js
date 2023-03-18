import React from 'react';

//////////////////////////////////--- Example 1 - Props  ---////////////////////////////////////////////////
    // Usage of props in React//
    function ChildComponent(props) {
        return(
            <h1>Example 1 - Props  - {props.name} {props.surname}</h1>
        );
    }
        
    function Example1() {
        return (
            <div>
            <div className="exampleHeader">Example 1 - Props </div>
                <ChildComponent name="Sara"  surname="Berry" />
                <ChildComponent name="Cenk" surname="Berry"/>
                <ChildComponent name="Nicole" surname="Berry"/>
            </div>
        );
    }


////////////////////////////////// Example 2 - Props ////////////////////////////////////////////////
    // Usage of props in React//
    function ChildComponent2(props) {
        return(
            <div>
                <div className="exampleHeader"> Example 2 - Props</div>
                <h1> Example 2 - Props</h1>
                <h3>Hi! I am {props.altText}</h3>
                <img src={props.address} alt={props.altText} />
            </div>
        );
    }
    function Example2() {
        return (
            <div>
            <ChildComponent2 
            altText="Homer Simpson"
            address="https://vignette.wikia.nocookie.net/simpsons/images/2/28/200px-Orville_Simpson.png/revision/latest?cb=20120325155243"/>
            </div>
        );
    }


////////////////////////////////// Example 3 - Props ////////////////////////////////////////////////
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
                    <div className="exampleHeader">Example 3 - Props </div>
                    <h1>Example 3 - Props  - {this.states.name} {this.states.surname} is {this.states.date.getFullYear() - this.states.birthYear} years old.</h1>
                </div> 
            )
        }
    }


////////////////////////////////// Example 4 - Class ////////////////////////////////////////////////
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
                    <div className="exampleHeader"> Example 4 - Class </div>
                    <h1>{this.state.comments.toString()}</h1>
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