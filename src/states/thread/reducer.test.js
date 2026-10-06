/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return initial state ([]) when given by unknown action
 *  - should return threads when given by RECIVE_THREADS action
 *  - should return threads with new thread when given by CREATE_THREAD action
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('threadsReducer function', () => {
  it('should return initial state ([]) when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return threads when given by RECIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECIVE_THREADS,
      payload: {
        thread: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'React',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.thread);
  });

  it('should return threads with new thread when given by CREATE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
      },
    ];
    const newThread = {
      id: 'thread-2',
      title: 'Thread Baru',
      body: 'Ini adalah thread baru',
    };
    const action = {
      type: ActionType.CREATE_THREAD,
      payload: {
        thread: newThread,
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([newThread, ...initialState]);
  });
});
