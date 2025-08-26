import express from "express";
import email from "./routes/email.js";
import cors from "cors";

const app = express();
const port = process.env.PORT

app.use(express.json());

app.use(cors({
  origin: "https://the-drinker.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, 
}));

app.use("/email", email);

app.get("/", (req, res) => {
  res.send({ message: "welcome!" });
});


app.listen(port, () => {
  console.log(`rodando o servidor na porta ${port}`)
})

export default app;
