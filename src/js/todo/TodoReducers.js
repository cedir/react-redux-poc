export default function todoApp(state={items:[]}, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      //console.log("add todo");
      return Object.assign({}, state, {
        items: [
            ...state.items,
            { message: action.message, completed: false }
            ]
        });
    }
    case 'COMPLETE_TODO': {
      //console.log("complete todo");
      const item = state.items[action.index];
      return Object.assign({}, state, {
        items: state.items.slice(0,action.index)
          .concat([Object.assign({},item,{completed: !item.completed})])
          .concat(state.items.slice(action.index+1))
        });
    }
    case 'DELETE_TODO': {
      //console.log("delete todo");
      return Object.assign({}, state, {
        items: state.items.slice(0,action.index)
          .concat(state.items.slice(action.index+1))
        });
    }
    case 'CLEAR_TODO': {
      return Object.assign({}, state, {
        items: []
        });
    }
    default:{
      return state;
    }
  }
}

