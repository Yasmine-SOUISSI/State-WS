import React, { Component } from "react";

export default class Todo extends Component {
    state = {
        todos: [
            { id: 1, title: "Todo 1" },
            { id: 2, title: "Todo 2" },
            { id: 3, title: "Todo 3" },
        ],
        todo: "",
    };
    addTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo],
        });
        console.log(this.state.todos);
    }
    handleChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    };
    render() {
        return (
            <div>
                {this.state.todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h1>{todo.title}</h1>
                            <button onClick={() => this.deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </div>
                    );
                })}
                <input type="text" onChange={this.handleChange} />
                <button
                    onClick={() =>
                        this.addTodo({
                            id: this.state.todos.length + 1,
                            title: this.state.todo,
                        })
                    }
                >
                    Add Todo
                </button>
            </div>
        );
    }
}
