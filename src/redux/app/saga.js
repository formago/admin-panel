
import { all, take, takeEvery, put, fork, call } from 'redux-saga/effects';
import service from './service';

import { database } from '../../helpers/firebase';

// import { push } from 'react-router-redux';
// import { getToken, clearToken } from '../../helpers/utility';
// import actions from './actions';

const fakeApiCall = true; // auth0 or express JWT


const getContacts = async () =>
    await database.ref('users').once('value')
        .then ((snapshot) => {
            const contacts = [];
            snapshot.forEach ((rawData) => {
                contacts.push (rawData.val ());
            });
            return contacts;
        })
        .catch (error => error);

export function* submitNamesRequest() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take('SEND_NAME');
    const { firstName, lastName } = request.names;   
    const wasSuccessful = yield call(getContacts);   
    console.log(wasSuccessful) 
  }
}

export default function* rootSaga() {
  yield all([
    fork(submitNamesRequest)
  ]);
}
