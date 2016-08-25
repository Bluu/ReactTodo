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
        todo: {
          id: '1',
          text: 'Something to do',
          completed: false,
          createdAt: 123
        }
      };

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      const todos = [
        {
          id: '1',
          text: 'Write test',
          completed: true,
          createdAt: 123,
          completedAt: 123
        }
      ];

      const updates = {
        completed: false,
        completedAt: null
      };

      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
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

  describe('authReducer', () => {
    it('should store uid on login', () => {
      const uid = '123';

      const action = {
        type: 'LOGIN',
        uid
      };

      const res = reducers.authReducer(null, df(action));

      expect(res.uid).toEqual(uid);
    });

    it('should clear uid on logout', () => {
      const authData = {
        uid: '123'
      };

      const action = {
        type: 'LOGOUT'
      };

      const res = reducers.authReducer(df(authData), df(action));
      
      expect(res).toEqual({});
    });
  });
});
