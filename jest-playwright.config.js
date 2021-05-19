module.exports = {
  launchOptions: {
    /* It will be headless = false always except when NODE_ENV = headless (github actions) */
    headless: process.env.NODE_ENV == 'headless'
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080
    }
  },
  browsers: ['chromium'],
  devices: []
};
