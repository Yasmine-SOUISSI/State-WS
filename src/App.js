import React, { Component } from "react";
import Counter from "./Components/Counter";
import Profile from "./Components/Profile";
import Todo from "./Components/Todo";

export default class App extends Component {
    // update state component will re-render
    state = {
        show: false,
    };
    handleShow = () => {
        // with this keyword we refer to the current state
        this.setState({ show: !this.state.show });
        console.log(this.state.show);
    };

    render() {
        // View UI
        return (
            <div>
                <button onClick={this.handleShow}>
                    {this.state.show ? "Hide" : "Show"}
                </button>
                {/*Import Profile from Component */}
                {this.state.show && <Profile />}
                {/* if return profile else return  null */}
                <Counter />
                <Todo />
            </div>
        );
    }
}
