import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        counter: 0,
    };
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    decrement = () => {
        this.state.counter > 0 &&
            this.setState({ counter: this.state.counter - 1 });
    };
    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}
