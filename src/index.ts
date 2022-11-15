import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
app.get("/users",  (req, res) =>{
  // here we will have logic to return all users
})

app.get("/users/:id", (req, res) =>{
  // here we will have logic to return user by id
})

app.post("/users", (req, res) =>{
  // here we will have logic to save a user
})

app.put("/users/:id", (req, res) =>{
  // here we will have logic to update a user by a given user id
})

app.delete("/users/:id", (req, res) =>{
  // here we will have logic to delete a user by a given user id
})

app.listen(5000, () => {
  console.log(`[server]: Server is running at http://localhost:5000`);
});