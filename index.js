//Importação das bibliotecas/frameworks
import express from "express";

//Configuração pré-pronta do dotenv
import 'dotenv/config';

//Importação do banco de dados
import connectDB from "./src/database/db.js"

//Importação das rotas
import imageRoute from "./src/routes/image.route.js";

const app = express();

//Configuração do json
app.use(express.json());

//Configuração da conexção como banco de dados
connectDB();

//Definição das rotas
app.use("/images", imageRoute);


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor conectado na porta ${port}`))