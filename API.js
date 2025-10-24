const GITHUB_USERNAME = 'tjnxtdoor';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

fetch(API_URL)
    .then(response => {
        // Check for HTTP errors
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Use the repository data
        console.log(`Successfully fetched ${data.length} repositories for ${GITHUB_USERNAME}:`);
        console.log(data);
    })
    .catch(error => {
        // Handle network errors or API errors
        console.error("Failed to fetch repositories:", error);
    });  


    // this is a test 