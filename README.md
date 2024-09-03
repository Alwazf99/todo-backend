# Todo Backend week-4 Assignment

This Node.js command-line interface (CLI) tool counts the number of words in a specified text file.

## Features

-**Create a Todo:** Add a new todo to the list.
-**Read Todos:** Retrieve all existing todos.
-**Update a Todo:** Modify an existing todo by ID.
-**Delete a Todo:** Remove a todo from the list by ID.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-backend.git

2. **Navigate to the project directory:**
     cd 
3. **Ensure Node.js is installed:**
     This script requires Node.js version 12 or higher.

## Usage
**Run the script:**

``bash
node index.mjs

## Testing with Postman

** You can test the API endpoints using Postman by following these steps:

** Install Postman: Download and install Postman from postman.com.

** Create a new request:

- ** For POST: Set the method to POST, enter http://localhost:3000/todos as the URL, and select Body > raw > JSON. Paste the JSON object and click Send.
- ** For GET: Set the method to GET and enter http://localhost:3000/todos as the URL. Click Send to retrieve the todos.
- ** For PUT: Set the method to PUT, enter http://localhost:3000/todos/{id} as the URL, replace {id} with the actual ID of the todo, and select Body > raw > JSON. Paste the updated JSON object and click Send.
- ** For DELETE: Set the method to DELETE, enter http://localhost:3000/todos/{id} as the URL, replace {id} with the actual ID of the todo, and click Send.
