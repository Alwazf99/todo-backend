import express from "express";
import fs from "fs";
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Create a todo

app.post("/todos", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newTodo = JSON.parse(body);

    fs.readFile("todos.json", "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Error reading todos file" });
      }

      const todos = JSON.parse(data);
      todos.push(newTodo);

      fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error writing to todos file" });
        }
        res.status(201).json(newTodo);
      });
    });
  });
});

// Read todos

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading todos file" });
    }

    const todos = JSON.parse(data);
    res.status(200).json(todos);
  });
});

// update todos

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const updatedTodo = JSON.parse(body);

    fs.readFile("todos.json", "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Error reading todos file" });
      }

      const todos = JSON.parse(data);
      const todoIndex = todos.findIndex((todo) => todo.id === id);

      if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
      }

      todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };

      fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error writing to todos file" });
        }
        res.status(200).json(todos[todoIndex]);
      });
    });
  });
});

// delete todo

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading todos file" });
    }

    let todos = JSON.parse(data);
    const newTodos = todos.filter((todo) => todo.id !== id);

    fs.writeFile("todos.json", JSON.stringify(newTodos, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error reading todos file" });
      }
      res.status(204).send();
    });
  });
});
