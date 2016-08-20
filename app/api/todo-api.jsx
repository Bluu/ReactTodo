module.exports = {
  setTodos: todos => {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: () => {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return Array.isArray(todos) ? todos : [];
  },
  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => !todo.completed || showCompleted);

    // filter by searchText
    filteredTodos = filteredTodos.filter(todo => {
      const text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
