const express = require('express');
const supertest = require('supertest');
const axios = require('axios');
const router = require('../routes/manga'); // replace with the path to your router

jest.mock('axios');

const app = express();
app.use('/', router);
const request = supertest(app);

describe("Get Manga", () => {
    it('should return a status 200 and the correct data structure', async () => {
        const mockResponse = {
            data: {
                data: [
                    // Mock response
                    {
                        id: "1",
                        attributes: {
                            title: { en: "Mock Title" },
                            tags: [
                                {
                                    attributes: {
                                        group: 'genre',
                                        name: { en: "Mock Genre" },
                                    },
                                },
                            ],
                        },
                        relationships: [
                            {
                                type: "cover_art",
                                attributes: {
                                    fileName: "MockFileName.jpg",
                                },
                            },
                        ],
                    },
                ]
            }
        };

        axios.get.mockResolvedValue(mockResponse);

        const response = await request.get('/'); // your endpoint

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.mangas)).toBe(true);
        // Add more assertions as needed
    });

    afterEach(() => {
        // Cleaning up the mess left behind the previous test
        axios.get.mockClear();
    });
});
