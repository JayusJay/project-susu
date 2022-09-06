//import momo from 'mtn-momo';
const momo = require('mtn-momo');

const { Collections } = momo.create({
    callbackHost: 'https://webhook.site/61686fe6-4597-48e4-9e5a-c8f01f3dcf71', //process.env.MOMO_CALLBACK_HOST,
});

const collections = Collections({
    userSecret: 'ef1e2b0e0039454a9cdfcf26d66e75f6', //process.env.MOMO_SANDBOX_USER_SECRET,
    userId: '6559b39e-1eb8-4a69-a375-ad02b6d5b7a2', //process.env.MOMO_SANDBOX_USER_ID,
    primaryKey: 'd4e93067fe69477995a3ec5578954c11', //process.env.MOMO_COLLECTION_PRIMARY_KEY,
});

export const PayWithMomo = (amount, phoneNumber) => {
    console.log('MoMo callbackhost: ', process.env.MOMO_CALLBACK_HOST);
};
collections
    .requestToPay({
        amount: '50',
        currency: 'EUR',
        externalId: '123456',
        payer: {
            partyIdType: 'MSISDN',
            partyId: '256774290781',
        },
        payerMessage: 'testing',
        payeeNote: 'hello',
    })
    .then((transactionId) => {
        console.log({ transactionId });

        // Get transaction status
        return collections.getTransaction(transactionId);
    })
    .then((transaction) => {
        console.log({ transaction });

        // Get account balance
        return collections.getBalance();
    })
    .then((accountBalance) => console.log({ accountBalance }))
    .catch((error) => {
        console.log(error);
    });
