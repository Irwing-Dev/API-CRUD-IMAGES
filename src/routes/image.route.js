import express from "express";
import { uploadImage, findImages, findImagesById } from "../controllers/image.controller.js";
import upload from "../middlewares/image.middleware.js";

const route = express.Router();

//Essa Rota irá colocar a imagem no banco de dados e no dispositivo colocado
route.post("/", upload.single("file"), uploadImage);
//Essa Rota irá buscar a imagem no banco de dados e exibi-la
route.get("/", findImages);
//Essa Rota irá atualizar uma parte da imagem no banco de dados e no dispositivo colocado
route.get("/:id", findImagesById);
//Essa Rota irá deletar a imagem no banco de dados e no dispositivo colocado
route.delete("/:id");

export default route