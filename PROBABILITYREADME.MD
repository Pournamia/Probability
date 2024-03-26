Express.js Readme

This document provides instructions on how to set up and run the Express.js Probability Calculator application.

1. Installation:
   - Clone or download the repository containing the application.
   - Navigate to the directory containing the application.
   -Make sure node.js is installed in your system
   - Install dependencies by running:
     ```
     npm install express
     ```

2. Running the Server:
   - Start the server by running:
     ```
     node probabilitynode.js
     ```
   - The server will start listening on port 3006 by default. You can specify a different port using the `PORT` environment variable.

3. Accessing the Probabilities Endpoint:
   - Use an HTTP client like cURL,a web browser or can use postman to access the `/probabilities` endpoint
   - If you don't specify a value for the `k` header, the server will return probabilities for k from 6 to 99.
   - To specify a value for `k`, include the `k` header in the request with the desired value.


