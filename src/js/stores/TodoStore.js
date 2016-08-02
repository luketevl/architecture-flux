import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.todos  = [];
    this.getAll = this.getAll.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  getAll(){
    return this.todos;
  }

  createTodo(text){
    this.todos.push({
      id: Date.now(),
      text,
      complete: false
    });

    this.emit('change');
  }

  handleAction(action){
    console.log('todoStore RECEIVED action', action);
    switch(action.type){
      case "CREATE_TODO":{
        this.createTodo(action.text);
      }
      case "RECEIVE_TODO":{
        this.todos = action.todos;
        this.emit('change');
      }
    }
  }
}
const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction);
window.dispatcher = dispatcher;
export default todoStore;
