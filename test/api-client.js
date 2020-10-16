const ApiClient = require('../lib/apiClient');
const assert = require('assert');

const apiClient = new ApiClient('https://jsonplaceholder.typicode.com');

describe('ApiClient - Request', function () {
    describe(`apiClient.users.get()`, function (done) {
        const args = { "test": "test" };
        it(`should return array`, function (done) {
            apiClient.users.get()
                .then((response => {
                    assert.equal(Array.isArray(response), true);
                    done();
                }))
                .catch(err => done(err));
        });
    });
});
