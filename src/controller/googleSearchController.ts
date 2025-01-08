const axios = require('axios');
const cheerio = require('cheerio');

class GoogleSearchController {
  // Google search API
  async search(req, res) {
    const { query } = req.query;  // Get the query from the query string

    // Return an error if query is missing
    if (!query) {
      return res.status(400).json({ error: 'Query is required.' });
    }

    try {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

      // Fetch the HTML page from Google
      const { data } = await axios.get(searchUrl);

      // Load the HTML into Cheerio
      const $ = cheerio.load(data);

      // Array to hold the search result titles (only top 10)
      const results = [];

      // Extract the titles of the search results (limit to top 10)
      $('h3').each((index, element) => {
        if (index < 10) {  // Limit to top 10 results
          const title = $(element).text();
          if (title) {
            console.log(title)
            results.push(title);
          }
        }
      });

      console.log(results);

      // Return the top 10 search result titles as JSON
      res.status(200).json({ results });

    } catch (error) {
      console.error('Error occurred while fetching Google search results:', error);
      res.status(500).json({ error: 'Failed to perform Google search.' });
    }
  }
}

module.exports = new GoogleSearchController();
