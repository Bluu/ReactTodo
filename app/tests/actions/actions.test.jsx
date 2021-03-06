import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

import firebase, { firebaseRef } from 'app/firebase/';
const actions = require('actions');

const createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '1',
        text: 'Something',
        completed: false,
        createdAt: 0
      }
    };

    const res = actions.addTodo(action.todo);

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
      type: 'UPDATE_TODO',
      id: '1',
      updates: { completed: false }
    };

    const res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate login action', () => {
    const action = {
      type: 'LOGIN',
      uid: '123'
    };

    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
    const action = {
      type: 'LOGOUT'
    };

    const res = actions.logout();

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach((done) => {
      const credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);

      firebase.auth().signInWithCredential(credential).then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 123
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({
        auth: {
          uid
        }
      });
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should add todo and dispatch ADD_TODO action', (done) => {
      const todoText = 'new todo';
      const store = createMockStore({
        auth: {
          uid
        }
      });
      const action = actions.startAddTodo(todoText);

      store.dispatch(action)
      .then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'ADD_TODO'
        });

        expect(mockActions[0].todo.text).toInclude(todoText);

        done();
      })
      .catch(done);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({
        auth: {
          uid
        }
      });
      const todoText = 'My todo item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });
  });
});
