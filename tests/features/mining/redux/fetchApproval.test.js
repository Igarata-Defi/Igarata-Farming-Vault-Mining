import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  MINING_FETCH_APPROVAL_BEGIN,
  MINING_FETCH_APPROVAL_SUCCESS,
  MINING_FETCH_APPROVAL_FAILURE,
  MINING_FETCH_APPROVAL_DISMISS_ERROR,
} from '../../../../src/features/mining/redux/constants';

import {
  fetchApproval,
  dismissFetchApprovalError,
  reducer,
} from '../../../../src/features/mining/redux/fetchApproval';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('mining/redux/fetchApproval', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchApproval succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchApproval())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', MINING_FETCH_APPROVAL_BEGIN);
        expect(actions[1]).toHaveProperty('type', MINING_FETCH_APPROVAL_SUCCESS);
      });
  });

  it('dispatches failure action when fetchApproval fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchApproval({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', MINING_FETCH_APPROVAL_BEGIN);
        expect(actions[1]).toHaveProperty('type', MINING_FETCH_APPROVAL_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchApprovalError', () => {
    const expectedAction = {
      type: MINING_FETCH_APPROVAL_DISMISS_ERROR,
    };
    expect(dismissFetchApprovalError()).toEqual(expectedAction);
  });

  it('handles action type MINING_FETCH_APPROVAL_BEGIN correctly', () => {
    const prevState = { fetchApprovalPending: false };
    const state = reducer(
      prevState,
      { type: MINING_FETCH_APPROVAL_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchApprovalPending).toBe(true);
  });

  it('handles action type MINING_FETCH_APPROVAL_SUCCESS correctly', () => {
    const prevState = { fetchApprovalPending: true };
    const state = reducer(
      prevState,
      { type: MINING_FETCH_APPROVAL_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchApprovalPending).toBe(false);
  });

  it('handles action type MINING_FETCH_APPROVAL_FAILURE correctly', () => {
    const prevState = { fetchApprovalPending: true };
    const state = reducer(
      prevState,
      { type: MINING_FETCH_APPROVAL_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchApprovalPending).toBe(false);
    expect(state.fetchApprovalError).toEqual(expect.anything());
  });

  it('handles action type MINING_FETCH_APPROVAL_DISMISS_ERROR correctly', () => {
    const prevState = { fetchApprovalError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: MINING_FETCH_APPROVAL_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchApprovalError).toBe(null);
  });
});

