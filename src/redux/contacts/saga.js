import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

import FirebaseHelper from '../../helpers/firebase';

const { database, createBatch, rsfDatabase, createNewRef } = FirebaseHelper;

export function* addContact() {
  yield takeEvery(actions.ADD_CONTACT, function*(payload) {

    debugger

    yield call(rsfDatabase.create, 'contacts', payload.contact);
  });
}



export function* editContact() {
  yield takeEvery(actions.EDIT_CONTACT, function*() {});
}
export function* deleteContact() {
  yield takeEvery(actions.DELETE__CONTACT, function*() {});
}
export default function* rootSaga() {
  yield all([fork(addContact), fork(editContact), fork(deleteContact)]);
}
