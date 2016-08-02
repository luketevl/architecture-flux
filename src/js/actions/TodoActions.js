import dispatcher from "../dispatcher";

export function createTodo(text){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(text){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}


export function reloadTodos(){
  /*axios("http://").then((data) => {
    console.log("got the data", data);
  });*/
  dispatcher.dispatch({
    type: "FETCH_TODO",
  });
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODO", todos: [
      {
        id: 80890,
        text: 'Go shopping',
        complete: false
      },
      {
        id: 232090,
        text: 'Pay Bills',
        complete: false
      },
      {
        id: 65465464,
        text: 'Lukete learn',
        complete: true
      }
    ]})
  }, 1000)
}
