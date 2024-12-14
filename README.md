# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in route handlers.  Asynchronous operations within routes often use promises. If these promises reject and aren't caught, it can lead to crashes or unexpected behavior.  This example shows the problem and its solution.

## Bug
The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation using a promise.  The promise has a 50% chance of rejecting (simulating a failure).  Crucially, the rejection is not handled, causing an unhandled promise rejection error.

## Solution
The `bugSolution.js` file provides a corrected version. It uses a `.catch()` block to handle potential rejections from the promise, preventing the unhandled rejection error.  Appropriate error handling ensures the server remains robust and provides informative responses to the client if something goes wrong.

## How to run
1. Clone the repository
2. Navigate to the repository's directory in your terminal.
3. Install dependencies: `npm install express`
4. Run the buggy code: `node bug.js` (Observe the unhandled rejection warning).
5. Run the corrected code: `node bugSolution.js` (Observe that errors are now handled gracefully).