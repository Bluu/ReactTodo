const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      const res = reducers.showCompletedReducer(df(true), df(action));

      expect(res).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'Play video games'
      };

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      const todos = [
        {
          id: '1',
          text: 'Write test',
          completed: false,
          createdAt: 0,
          completedAt: null
        }
      ];

      const action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);

      res = reducers.todosReducer(df(res), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(null);
    });

    it('should add existing todos', () => {
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

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
