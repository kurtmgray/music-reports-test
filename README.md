# Instructions

Install dependencies
$ npm install

Run application
$ npm start

# Notes

My implementation fetches album data from the API based on a user provided search term. Each page's search term is stored in state within the _filters_ object, keyed by an integer which references the page (1 or 2 in this simple example). The _useParams_ hook is used to pass the current page number to the getData function, which is then used as a key to parse the appropriate object for use in the fetch call URL.

# Additional considersations

Normally, the API key should not be pushed to GH, but given the nature of this small project and the permissions of the repository, I've chosen to include it for simplicity's sake.

I've included basic "loading" states or "not found" message within the error state based on the API response or response state. Unfortunately, the API I'm using simply returns null if no artists are found. To mock a different response or a more specific error message, I've used a setTimeout to set an _error_ in state after 3 seconds. An improvement to "not found" could be to provide search results or provide suggestions of closely matched but misspelled artists.
