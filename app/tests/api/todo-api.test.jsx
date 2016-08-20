const expect = require('expect');

const TodoAPI = require('todo-api');

describe('Todo API', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [
        {
          id: 1,
          test: 'test todo api',
          completed: false
        }
      ];

      TodoAPI.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = {
        a: 'b'
      };

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return todos if valid array in local storage', () => {
      const todos = [
        {
          id: 1,
          test: 'test todo api',
          completed: false
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));

      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

    it('should to get empty array for bad local storage data', () => {
      const todos = TodoAPI.getTodos();

      expect(todos).toEqual([]);
    });
  });
});
