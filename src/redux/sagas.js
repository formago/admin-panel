import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import appSagas from './app/saga';
import contactsSagas from './contacts/saga';
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    appSagas(),
    contactsSagas()
  ]);
}
