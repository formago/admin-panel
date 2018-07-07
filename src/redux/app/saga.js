
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
         console.log(snapshot);
            const contacts = [];
            snapshot.forEach ((rawData) => {
                contacts.push (rawData.val ());
            });
            return contacts;
        })
        .catch (error => error);

        
const registerNewUser = async (request) =>
await database.ref('users').push(request, function(error){
  if(error){
    alert("Error - "+ error);
  }
  else{
    alert("Data is saved");
  }

})
    .then ((snapshot) => {
     console.log(snapshot);
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

export function* submitNewUserRequest() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take('REGISTER_NEW_USER');
    debugger
    
    const wasSuccessful = yield call(registerNewUser, request.data);   
    console.log(wasSuccessful) 
  }
}

export default function* rootSaga() {
  yield all([
    fork(submitNamesRequest),
    fork(submitNewUserRequest)
  ]);
}
