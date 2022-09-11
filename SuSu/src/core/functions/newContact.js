const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.newContact = functions.https.onRequest(async (request, response) => {
    const contacts = request.body;
    function formatNumber(number) {
        number = number.replace(/ /g, '').replace('+233', '0');
        if (number.length === 10) return number;
        return null;
    }
    const saveAppUsers = await admin.firestore().collection('users').get();
    const appUserContacts = [];
    saveAppUsers.forEach((doc) => {
        appUserContacts.push(doc.data().phoneNumber);
    });
    const matchedContacts = [];
    contacts.forEach((contact) => {
        contact = formatNumber(contact);
        if (contact) {
            if (appUserContacts.includes(contact)) {
                matchedContacts.push(contact);
            }
        }
    });
    const matchedUsers = [];
    matchedContacts.forEach((contact) => {
        saveAppUsers.forEach((doc) => {
            if (contact === doc.data().phoneNumber) {
                matchedUsers.push({
                    phoneNumber: doc.data().phoneNumber,
                    token: doc.data().token,
                });
            }
        });
    });
    console.log('matchedUsers: ', matchedUsers);
    const payload = {
        notification: {
            title: 'New Contact',
            body: 'You have a new contact',
            sound: 'default',
        },
    };
    matchedUsers.forEach((user) => {
        admin.messaging().sendToDevice(user.token, payload);
    });
    response.send('Success');
});
