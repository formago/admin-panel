
import { all, take, takeEvery, put, fork, call } from 'redux-saga/effects';
import service from './service';


import { push } from 'react-router-redux';
import { getToken, clearToken } from '../../helpers/utility';
import actions from './actions';

const fakeApiCall = true; // auth0 or express JWT

export function* submitNamesRequest() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take('SEND_NAME');
    const { firstName, lastName } = request.names;   
    const wasSuccessful = yield call(service.writeInFireBaseStore);

  }
}

export default function* rootSaga() {
  yield all([
    fork(submitNamesRequest)
  ]);
}
