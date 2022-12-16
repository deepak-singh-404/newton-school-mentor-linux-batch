import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 56
        }
    }

    increaseCounter() {
        //console.log("THIS", this)
        this.setState(({ counter }) => ({
            counter: counter + 1
        }))
        console.log("INCREMENT FUNC", this.state.counter)
    }

    decreaseCounter() {
        this.setState(({ counter }) => ({
            counter: counter - 1
        }))
        console.log("DECREMENT FUNC", this.state.counter)
    }

    render() {
        return (<>
            {console.log("COUNTER IN HTML", this.state.counter)}
            <h3>THIS IS CLASS BASED COMPONENT</h3>
            {this.state.counter}
            <button onClick={this.increaseCounter.bind(this)}>+</button>
            <button onClick={this.decreaseCounter.bind(this)}>-</button>
        </>)
    }
}

export default Counter