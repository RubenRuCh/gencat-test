const { chromium } = require('playwright');
const searchInGencat = require('./gencat.js');

// Need to wrap this on async function to be able to use await
(async () => {
  // Data to make search
  const URL = 'https://web.gencat.cat/ca/inici';
  const SEARCH_TEXT = 'agenda cultural';
  const SELECTOR_SEARCH_BUTTON = '[aria-label="Cercar"]';
  const SELECTOR_SEARCH_INPUT = 'input[type="search"]';

  // Open chromium
  const browser = await chromium.launch({
    headless: false,
    slowMo: 50
  });

  // Open a new page
  let page = await browser.newPage();

  // Make a search in gencat web
  page = await searchInGencat({
    PAGE: page,
    URL,
    SEARCH_TEXT,
    SELECTOR_SEARCH_BUTTON,
    SELECTOR_SEARCH_INPUT
  });

  // Close page and browser
  await page.close();
  await browser.close();
})();
