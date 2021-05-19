# gencat-test
Technical test using [Playwright](https://playwright.dev/)

## What is this
This is a project created as part of a frontend selection process.

It consists of using the Playwright library to automate the process of accessing a web page (in this case [gencat](https://web.gencat.cat/ca/inici)).

In addition, the project has been developed using the TDD methodology, using Jest with a Playwright-compatible configuration.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all dependencies.

```bash
npm install
```
## Tests

If you want to execute tests, in project root folder run:

```bash
npm run test
```

If you are in a non Windows environment (for example Ubuntu) and you find some erros executing tests, you should problably run: 

```bash
npm run test:headless
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
