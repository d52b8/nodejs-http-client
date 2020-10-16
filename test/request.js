const HttpClient = require('../lib/httpClient');
const assert = require('assert');

const httpClient = new HttpClient({ baseURL: 'http://httpbin.org' });

describe('HttpClient - Request', function () {
    describe(`get('/get?test=test')`, function (done) {
        const args = { "test": "test" };
        it(`should return response.args ` + JSON.stringify(args), function (done) {
            httpClient.get('/get?test=test', args)
                .then((response => {
                    assert.deepStrictEqual(response.args, args);
                    done();
                }))
                .catch(err => done(err));
        });
    });

    describe(`post('/post', { "test": "test" })`, function (done) {
        const body = { "test": "test" };
        it(`should return response.json ` + JSON.stringify(body), function (done) {
            httpClient.post('/post', body)
                .then((response => {      
                    assert.deepStrictEqual(response.json, body);
                    done();
                }))
                .catch(err => done(err));
        });
    });

    describe(`put('/put', { "test": "test" })`, function (done) {
        const body = { "test": "test" };
        it(`should return response.json ` + JSON.stringify(body), function (done) {
            httpClient
                .put('/put', body).then((response => {      
                    assert.deepStrictEqual(response.json, body);
                    done();
                }))
                .catch(err => done(err));
        });
    });

    describe(`patch('/patch', { "test": "test" }, { parseResponse: true })`, function (done) {
        const operations = { "test": "test" };
        it(`should return response.json ` + JSON.stringify(operations), function (done) {
            httpClient
                .patch('/patch', operations, { parseResponse: true }).then((response => {      
                    assert.deepStrictEqual(response.json, operations);
                    done();
                }))
                .catch(err => done(err));
        });
    });

    describe(`delete('/delete', { parseResponse: true })`, function (done) {
        const url = 'http://httpbin.org/delete';
        it(`should return response.url ` + url, function (done) {
            httpClient
                .delete('/delete', { parseResponse: true }).then((response => {      
                    assert.deepStrictEqual(response.url, url);
                    done();
                }))
                .catch(err => done(err));
        });
    });
});
