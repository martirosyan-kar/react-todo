import uuid from 'uuid';

export const addToDo = ({
  text,
} = {}) => ({
  type: 'INSERT_TODO',
  todo: {
    id: uuid(),
    text
  }
});

export const toggleToDo = ({ id } = {}) => ({
  type: 'COMPLETED_TODO',
  id,
});

export const editToDo = ({ id } = {}) => ({
  type: 'EDIT_TODO',
  id,
});

export const removeTodo = ({ id } = {}) => ({
  type: 'REMOVE_TODO',
  id,
});

export const updateTodo = (id, updates) => ({
  type: 'UPDATE_TODO',
  id,
  updates,
});

export const nonEditable = () => ({
  type: 'NON_EDITABLE'
});

export const nonEditableTodo = ({ id }) => ({
  type: 'NON_EDITABLE_TODO',
  id
});

