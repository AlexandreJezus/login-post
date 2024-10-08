import e from "express";
import "dotenv/config";
import "./config/db.js";
import post_router from "./routes/post-route.js";
import user_router from "./routes/user-route.js";

const app = e();

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

app.use(e.json());
app.use("/post", post_router);
app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Server is running"));
