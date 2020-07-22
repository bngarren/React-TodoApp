import React from "react";

// components
import Header from "./Header"
import TodosList from "./TodosList";
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 0,
                title: "Get virtual machine working",
                completed: true
            },
            {
                id: 1,
                title: "Learn React",
                completed: false
            },
            {
                id: 2,
                title: "Make Pubmed tracker",
                completed: false
            }
        ]
    }

    handleCheckboxClicked = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
        })
    }

    handleTodoDelete = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }

    addTodoItem = (title) => {

        const keys = Array.from(this.state.todos.keys())
        const last_key = keys.pop()

        const newTodo = {
            id: last_key+1,
            title: title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }


    render() {
        return (
            <div className="container">
                <Header/>
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList todos={this.state.todos} handleCheckboxClicked={this.handleCheckboxClicked} handleTodoDelete={this.handleTodoDelete}/>
            </div>
        )
    }
}

export default TodoContainer