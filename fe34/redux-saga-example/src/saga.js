import { put, takeEvery, call } from 'redux-saga/effects';

const asyncRequest = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
});

function* minus () {
  yield call(asyncRequest);
  yield put({ type: "MINUS_SUCCESS"});
}

export default function* rootSaga () {
  yield takeEvery("MINUS_START", minus);
}
