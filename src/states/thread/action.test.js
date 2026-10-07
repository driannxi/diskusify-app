/**
 * test scenario for asyncAddThread thunk
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when thread creation success
 *  - should dispatch action and notify correctly when thread creation failed
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import * as api from '../../utils/api';
import { asyncAddThread, createThreadActionCreator } from './action';

const fakeThread = {
  id: 'thread-1',
  title: 'Judul Thread',
  body: 'Isi Thread',
  category: 'General',
};

const fakeErrorResponse = new Error('Failed to create thread');

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch action correctly when thread creation success', async () => {
    // arrange
    vi.spyOn(api, 'createThread').mockResolvedValue(fakeThread);

    const dispatch = vi.fn();

    // action
    await asyncAddThread({ title: 'Judul Thread', body: 'Isi Thread' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.createThread).toHaveBeenCalledWith({ title: 'Judul Thread', body: 'Isi Thread' });
    expect(dispatch).toHaveBeenCalledWith(createThreadActionCreator(fakeThread));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and notify correctly when thread creation failed', async () => {
    // arrange
    vi.spyOn(api, 'createThread').mockRejectedValue(fakeErrorResponse);

    const dispatch = vi.fn();

    // action
    await asyncAddThread({ title: 'Judul Thread', body: 'Isi Thread' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.createThread).toHaveBeenCalledWith({ title: 'Judul Thread', body: 'Isi Thread' });
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
