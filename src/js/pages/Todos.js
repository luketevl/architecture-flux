import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
    this.reloadTodos = this.reloadTodos.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }
  createTodo(text){
    TodoActions.createTodo(Date.now());
  }
  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos}>Reload!</button>
        <input />
        <button onClick={this.createTodo}>ADD!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
