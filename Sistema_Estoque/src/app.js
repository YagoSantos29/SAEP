import express from "express";
import routes from "./routes/routes.js";
import { setup } from "./database/dbConnection.js";

const app = express();

app.use(express.json());
app.use(routes);

await setup();

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});