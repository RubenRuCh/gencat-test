/**
 * Using playwright, it goes to gencat web and do a text search
 *
 * @param {Object} param
 * @returns playwright page object
 */
async function searchInGencat({
  PAGE,
  SEARCH_TEXT = '',
  URL = 'https://web.gencat.cat/ca/inici',
  SELECTOR_SEARCH_BUTTON = '[aria-label="Cercar"]',
  SELECTOR_SEARCH_INPUT = 'input[type="search"]'
}) {
  try {
    // Navigate to specified URL
    await PAGE.goto(URL);

    // Type a search
    await PAGE.fill(SELECTOR_SEARCH_INPUT, SEARCH_TEXT);

    // Find search button and press it
    await PAGE.click(SELECTOR_SEARCH_BUTTON);
  } catch (error) {
    console.error(error);
  } finally {
    // Return page once the search has been done or an error as ocurred
    return PAGE;
  }
}

module.exports = searchInGencat;
