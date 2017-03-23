/**
 * healthルーターテスト
 *
 * @ignore
 */
import * as assert from 'assert';
import * as httpStatus from 'http-status';
import * as supertest from 'supertest';

import * as app from '../app/app';

before(async () => {
});

describe('GET /', () => {
    it('ok', async () => {
        await supertest(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /text\/plain/)
            .expect(httpStatus.OK)
            .then((response) => {
                console.log(response);
                assert.equal(response.text, 'healthy!');
            });
    });
});

describe('POST /', () => {
    it('not found', async () => {
        await supertest(app)
            .post('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(httpStatus.NOT_FOUND)
            .then((response) => {
                assert(Array.isArray(response.body.errors));
            });
    });
});
