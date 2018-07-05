
// import { requestHelper } from '../../helpers/request';

import FirebaseHelper from '../../helpers/firebase';
const { database, createBatch, rsfFirestore, createNewRef } = FirebaseHelper;

// import { database } from '../../firebase/firebase';

const service = {

    writeInFireBaseStore: function () {

        var usersPromise = database.collection('users');

        const readUsers = async () =>
            await usersPromise.get().then(querySnapshot => {
                const users = [];
                try {
                    querySnapshot.forEach(doc => {
                        users.push({ doc });
                    });
                } catch (e) { }
                console.log(users);
                return users;
            });


        readUsers();

        // .then ((snapshot) => {            
        //     const chatUsers = [];
        //     snapshot.forEach ((rawData) => {
        //         chatUsers.push (rawData.val ());
        //     });
        //     return chatUsers;
        // })
        // .catch (error => error);
    }


};

export default service;