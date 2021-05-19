const { chromium } = require('playwright');
import searchInGencat from './gencat.js';

const URL = 'https://web.gencat.cat/ca/inici';
const SEARCH_TEXT = 'agenda cultural';
const SELECTOR_SEARCH_BUTTON = '[aria-label="Cercar"]';
const SELECTOR_SEARCH_INPUT = 'input[type="search"]';

let browser;
let page;

/* Tests setup */

beforeAll(async () => {
  // Setup a browser using chromium
  browser = await chromium.launch({
    headless: process.env.NODE_ENV == 'headless',
    slowMo: 50
  });
});
afterAll(async () => {
  // Always make sure browser is closed at the end
  await browser.close();
});

beforeEach(async () => {
  // Create a new page for each test
  page = await browser.newPage();
});
afterEach(async () => {
  // Close page used in each test
  await page.close();
});

/* Tests cases */

describe('Gencat.js', () => {
  it('should go to gencat web', async () => {
    page = await searchInGencat({ PAGE: page, URL });
    expect(await page.title()).toMatch('gencat');
  });

  it('should be able to find a search input', async () => {
    page = await searchInGencat({
      PAGE: page,
      URL,
      SELECTOR_SEARCH_INPUT
    });

    const searchInput = await page.waitForSelector(SELECTOR_SEARCH_INPUT);
    expect(searchInput).toBeTruthy();
  });

  it('should be able to find the search button', async () => {
    page = await searchInGencat({
      PAGE: page,
      URL,
      SELECTOR_SEARCH_BUTTON
    });

    const searchButton = await page.waitForSelector(SELECTOR_SEARCH_BUTTON);
    expect(searchButton).toBeTruthy();
  });

  it('should apply search text triggering a change in url', async () => {
    page = await searchInGencat({
      PAGE: page,
      URL,
      SEARCH_TEXT,
      SELECTOR_SEARCH_BUTTON,
      SELECTOR_SEARCH_INPUT
    });
    // Gencat web uses + symbol to fill blank spaces in string used to search
    expect(await page.url().replace('+', ' ')).toMatch(SEARCH_TEXT);
  });
});
