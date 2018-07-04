
// import { requestHelper } from '../../helpers/request';

// import FirebaseHelper from '../../helpers/firebase';
// const { database, createBatch, rsfFirestore, createNewRef } = FirebaseHelper;

// import FirebaseHelper from '../../helpers/firebase';
// const { database, createBatch, rsfFirestore, createNewRef } = FirebaseHelper;

import { database } from '../../firebase/firebase';

const service = {
    
    writeInFireBaseStore: async function() {        
        return await database.ref('users')
        .then ((snapshot) => {            
            const chatUsers = [];
            snapshot.forEach ((rawData) => {
                chatUsers.push (rawData.val ());
            });
            return chatUsers;
        })
        .catch (error => error);
    }


};

export default service;