// 1. Import the Express module
const express = require('express');

// 2. Create an instance of Express
const app = express();

// 3. Define a port for the server to listen on (default: 3000)
const PORT = 3000;

// 4. Middleware to parse incoming JSON requests
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// 5. Define a simple GET route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!'); // Send a plain text response
});

// 6. Example of Route Parameters: Route to get user information using a route parameter
// This route uses the user ID as a route parameter, which is specified in the URL
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Extract the 'id' from the route parameters
    res.send(`User ID is: ${userId}`); // Respond with the user ID
});

// 7. Example of Query Parameters: Route to search using query parameters
// Query parameters are passed after a '?' in the URL (e.g., /search?query=JavaScript&limit=10)
app.get('/search', (req, res) => {
    const query = req.query.query; // Extract 'query' from the query parameters
    const limit = req.query.limit; // Extract 'limit' from the query parameters
    res.send(`Search results for: ${query} (Limit: ${limit})`);
});

// 8. Example of handling POST data using the request body (form submission or JSON input)
app.post('/submit', (req, res) => {
    // Extract data from the request body (for both JSON and URL-encoded form data)
    const { name, message } = req.body; // Destructure the 'name' and 'message' fields from the body
    if (!name || !message) {
        return res.status(400).send('Name and message are required!');
    }
    // Respond with the data that was submitted
    res.json({
        status: 'Success',
        name: name,
        message: message
    });
});

// 9. Another example of route parameters: Fetch a post by post ID and category
// Route example: /posts/123/comments/456 (where 123 is postId and 456 is commentId)
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params; // Destructure postId and commentId from req.params
    res.send(`Post ID: ${postId}, Comment ID: ${commentId}`);
});

// 10. Example of combining query parameters and route parameters
// Route example: /products/123?category=books&sort=asc
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId; // Route parameter for product ID
    const category = req.query.category;   // Query parameter for category
    const sort = req.query.sort;           // Query parameter for sorting
    res.send(`Product ID: ${productId}, Category: ${category}, Sort Order: ${sort}`);
});

// 11. Catch-all route for undefined URLs (404 error)
app.use((req, res) => {
    res.status(404).send('404 Not Found!'); // Send a 404 status with a custom message
});

// 12. Start the server on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
