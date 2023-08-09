import { uploadImageService, findImagesService } from "../services/image.service.js";
import fs from "fs";

export const uploadImage = async (req, res) => {
    try {
        //Essa variável pega os campos que vão ser passados em um input lá pelo html
        const { name } = req.body
        //Essa variável pegar uma função dentro do multer e o nome da variável vai servir como o nome do campo que vai ser preenchido no html
        const file = req.file
    
        //Essa variável vai esperar o serviço de upload de imagem
        const picture = await uploadImageService(name, file);

        //Esse teste serve para ver se ocorreu algum erro durante o upload da imagem
        if (!picture) {
            res.status(400).send({message: "Não conseguimos fazer o upload da imagem, verifique se o tipo do arquivo é png, jpg, jpeg, svg ou webp."})
        }
        
        //Essa função serve para  salvar a imagem na pasta uploads
        await picture.save();

        res.send(picture);
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

export const findImages = async (req, res) => {
    try {
        const picture = await findImagesService();
    
        if (picture.length === 0) {
            return res.status(400).send({message: "Nenhuma imagem encontrada."})
        }

        res.send(picture)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}