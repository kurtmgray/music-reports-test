# Instructions

Install dependencies
$ npm install

Paste API KEY into src/config.js
Replace empty string AUDIODB_API_KEY with supplied key.
Key can be found in the email containing the link to this repository.

Run application
$ npm start

# Notes

My implementation fetches album data from the API based on a user provided search term. Each page's search term is stored in state within the _filters_ object, keyed by an integer which references the page (1 or 2 in this simple example). The _useParams_ hook is used to pass the current page number to the getData function, which is then used as a key to parse the appropriate object for use in the fetch call URL.

Albums are stored on the _data_ state object, keyed by the artist search term. Subsequent http requests are made conditionally if the search term does not exist in _data_ state, so only one http request is made per search term. I've intentionally left a console.log in the getData function in Utils to show when any data is received from the API. To really optimize, search terms can be sanitized to uniform cases.

# Additional considerations

Since the API key should not be pushed to GH, but given the nature of this small project and the permissions of the repository, I've chosen to include it in the email for simplicity's sake. Normally this would be an environment variable, using dotenv or specifying the key during deployment.

I've included basic "loading" states or "not found" message within the error state based on the API response or response state. Unfortunately, the API I'm using simply returns null if no artists are found. To mock a different response or a more specific error message, I've used a setTimeout to set an _error_ in state after 3 seconds. An improvement to "not found" could be to provide search results or provide suggestions of closely matched but misspelled artists.

Additional error handling to manage different http codes would be essential. I didn't include much error handling given the time I had to work on this mini-project.
