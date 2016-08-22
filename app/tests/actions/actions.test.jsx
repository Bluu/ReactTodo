var expect = require('expect');

var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Walk the dog'
    };

    const res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
    const todos = [
      {
        id: '1',
        text: 'Test',
        completed: false,
        completedAt: null,
        createdAt: 33000
      }
    ];

    const action = {
      type: 'ADD_TODOS',
      todos
    };

    const res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: '1'
    };

    const res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
