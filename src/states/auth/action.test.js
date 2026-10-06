/**
 * test scenario for asyncLogin thunk
 *
 * - asyncLogin thunk
 *  - should dispatch action correctly when login success
 *  - should dispatch action and call alert correctly when login failed
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import * as api from '../../utils/api';
import { asyncLogin, setAuthActionCreator } from './action';

const fakeToken = 'fake-token-123';
const fakeUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
};

const fakeErrorResponse = new Error('Invalid email or password');

describe('asyncLogin thunk', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch action correctly when login success', async () => {
    // arrange
    vi.spyOn(api, 'login').mockResolvedValue(fakeToken);
    vi.spyOn(api, 'putAccessToken').mockImplementation(() => {});
    vi.spyOn(api, 'getOwnProfile').mockResolvedValue(fakeUser);

    const dispatch = vi.fn();

    // action
    await asyncLogin({ email: 'john@example.com', password: 'password123' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.login).toHaveBeenCalledWith({ email: 'john@example.com', password: 'password123' });
    expect(api.putAccessToken).toHaveBeenCalledWith(fakeToken);
    expect(api.getOwnProfile).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(setAuthActionCreator(fakeUser));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when login failed', async () => {
    // arrange
    vi.spyOn(api, 'login').mockRejectedValue(fakeErrorResponse);
    vi.spyOn(api, 'putAccessToken').mockImplementation(() => {});
    vi.spyOn(api, 'getOwnProfile').mockImplementation(() => {});
    window.alert = vi.fn();

    const dispatch = vi.fn();

    // action
    await asyncLogin({ email: 'john@example.com', password: 'wrong' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.login).toHaveBeenCalledWith({ email: 'john@example.com', password: 'wrong' });
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
