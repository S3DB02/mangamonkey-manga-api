const axios = require('axios');
const http = require('http');
const express = require('express');
const router = require('../routes/manga'); // replace with the path to your router

jest.mock('axios');

let server;

beforeAll(() => {
    const app = express();
    app.use('/', router);
    server = http.createServer(app);
    server.listen();
});

afterAll((done) => {
    server.close(done);
});

it('should fetch mangas', async () => {
    axios.get.mockResolvedValue({
        data: {
            data: [], // mock response
        },
    });

    const options = {
        hostname: 'localhost',
        port: server.address().port,
        method: 'GET',
    };

    const req = http.request(options);
    req.end();

    req.on('response', (res) => {
        let chunks = [];

        res.on('data', (chunk) => chunks.push(chunk));

        res.on('end', () => {
            const body = Buffer.concat(chunks).toString();
            const response = JSON.parse(body);

            // Assert the response here
            expect(response).toEqual({ mangas: [] });

            done();
        });
    });
});
