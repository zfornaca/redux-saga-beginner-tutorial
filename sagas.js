import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// worker saga
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// watcher saga
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// single entry point
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
