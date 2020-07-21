function customThen(resolve, reject) {
    console.log('To be, or not to be');
    resolve(this.response);
}

const dummyPromise = {
    response: 'that is the question',
    then: customThen
};

// (async function () {
//     console.log(await dummyPromise);
//     // To be, or not to be
//     // that is the question
// })();

class AccountStore {
    async register(req) {
        console.log(await dummyPromise);
        return {
            'user': 'bijay'
        };
    }

}

module.exports = new AccountStore()