# MangaMonkey Manga API
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Jest](https://img.shields.io/badge/-jest-%238D6748?style=for-the-badge&logo=jest&logoColor=white)

You can set up this app by following these steps:

## Prerequisites

- Ensure that you have followed all instructions provided [here](https://github.com/S3DB02)

## Running Manually

While developing this app it is recommended to run the API manually.

### Set up dependencies

- Open your terminal.
- Navigate to your project directory using the `cd` command.
- Install the project's dependencies by running:
    ```
    npm install
    ```
- You can add any additional dependencies you might want to use with `npm install <dependency>`.

### Run your project

- Start the project by running
    ```
    npm start
    ```
    
## Testing

Tests for this app are ran automatically on each git commit as a part of CI in [GitHub Actions](https://github.com/S3DB02/mangamonkey-manga-api/actions), in addition to running the Docker container and a SonarCloud analysis.

To run tests manually you can use `npm test`.

## Useful Documentation

[Node.js](https://nodejs.org/en/doc)
[Express](https://expressjs.com/)
[Jest](https://jestjs.io/docs/getting-started)
[Axios](https://axios-http.com/docs/intro)
