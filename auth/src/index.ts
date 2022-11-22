import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/users/currentuser", (_, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("Auth service listening on port 3000!!!!!");
});
