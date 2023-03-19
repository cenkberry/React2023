import React from 'react';

////////////////////////////////// Props - 1 ///////////////////////////////////////////////
    // Usage of props in React//
    function ChildComponent(props) {
        return(
            <h1> Props - 1  - {props.name} {props.surname}</h1>
        );
    }
        
    function Example1() {
        return (
            <div>
            <div className="exampleHeader"> Props - 1 </div>
                <ChildComponent name="Sara"  surname="Berry" />
                <ChildComponent name="Cenk" surname="Berry"/>
                <ChildComponent name="Nicole" surname="Berry"/>
            </div>
        );
    }


////////////////////////////////// Props - 2 ////////////////////////////////////////////////
    // Usage of props in React//
    function ChildComponent2(props) {
        return(
            <div>
                <div className="exampleHeader">Props - 2</div>
                <h1>Props - 2</h1>
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


////////////////////////////////// Props - 3 ////////////////////////////////////////////////
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
                    <div className="exampleHeader">Props - 3</div>
                    <h1>Props - 3 - {this.states.name} {this.states.surname} is {this.states.date.getFullYear() - this.states.birthYear} years old.</h1>
                </div> 
            )
        }
    }


////////////////////////////////// Class ////////////////////////////////////////////////
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
                    <div className="exampleHeader"> Class </div>
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