import express from "express";
const app = express();

app.get("/", (req, res) => {
  throw new Error("oops");
});

// Error handling middleware
app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(3008, () => {
  console.log("Server running on port 3008");
});
