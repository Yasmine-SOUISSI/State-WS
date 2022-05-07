import React, { Component } from "react";

export default class Profile extends Component {
    // state accept all dataTypes
    state = {
        name: "Krishna",
        counter: 0,
        timer: null,
    };
    // access to value nameOfObject.key
    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1,
                });
            }, 1000),
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}
