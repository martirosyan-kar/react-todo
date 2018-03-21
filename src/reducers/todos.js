export default (state = [], action) => {
  switch (action.type) {
    case "INSERT_TODO":
      return [
        ...state,
        {
          ...action.todo,
          completed: false,
          editable: false
        }
      ];
    case "REMOVE_TODO":
      return state.filter(({ id }) => id !== action.id);
    case "UPDATE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates,
            editable: false
          };
        }

        return todo;
      });
    case "EDIT_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            editable: true
          };
        } else {
          return {
            ...todo,
            editable: false
          };
        }
      });

    case "COMPLETED_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

    case "NON_EDITABLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            editable: false
          };
        }
        return todo;
      });

    case "NON_EDITABLE":
      return state.map(todo => {
        return {
          ...todo,
          editable: false
        };
      });

    default:
      return state;
  }
};
