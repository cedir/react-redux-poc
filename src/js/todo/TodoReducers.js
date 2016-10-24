

export default function todoApp(state={}, action) {
  let items;
  switch (action.type) {
    case 'ADD_TODO':
        console.log("add todo");
      items = [].concat(state.todo.items);
      return Object.assign({}, state, {
        todo: {
          items: items.concat([{
            message: action.message,
            completed: false
          }])
        }
      });

    case 'COMPLETE_TODO':
        console.log("complete todo");
      items = [].concat(state.todo.items);

      items[action.index].completed = true;

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'DELETE_TODO':
        console.log("delete todo");
      items = [].concat(state.todo.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'CLEAR_TODO':
      return Object.assign({}, state, {
        todo: {
          items: []
        }
      });

    default:
      return state;
  }
}

