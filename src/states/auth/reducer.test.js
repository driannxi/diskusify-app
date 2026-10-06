/**
 * test scenario for authReducer
 *
 * - authReducer function
 *  - should return initial state (null) when given by unknown action
 *  - should return user when given by SET_AUTH action
 *  - should return null when given by UNSET_AUTH action
 */

import { describe, it, expect } from 'vitest';
import authReducer from './reducer';
import { ActionType } from './action';

describe('authReducer function', () => {
  it('should return initial state (null) when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authReducer(initialState, action);

    // assert
    expect(nextState).toBe(initialState);
  });

  it('should return user when given by SET_AUTH action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH,
      payload: {
        user: {
          id: 'user-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.png',
        },
      },
    };

    // action
    const nextState = authReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.user);
  });

  it('should return null when given by UNSET_AUTH action', () => {
    // arrange
    const initialState = {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
    };
    const action = {
      type: ActionType.UNSET_AUTH,
    };

    // action
    const nextState = authReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });
});
