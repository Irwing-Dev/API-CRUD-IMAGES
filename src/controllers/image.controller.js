import { uploadImageService, findImagesService, findImagesByIdService, updateImageService, deleteImageService } from "../services/image.service.js";
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
            return res.status(400).send({message: "Não conseguimos fazer o upload da imagem, verifique se o tipo do arquivo é png, jpg, jpeg, svg ou webp."})
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

export const findImagesById = async (req, res) => {
    try {
        const id = req.params.id

        const picture = await findImagesByIdService(id);

        if (!picture) {
            return res.status(400).send({message: "Nenhuma imagem encontrada."})
        }

        res.send(picture)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

export const updateImages = async (req, res) => {
    try {
        const { name } = req.body
        const file = req.file
        const id = req.params.id
    
        const picture = await updateImageService(id, name, file);

        if (!picture) {
            return res.status(400).send({message: "Não conseguimos atualizar a imagem, verifique se o tipo do arquivo é png, jpg, jpeg, svg ou webp."})
        }
        fs.unlinkSync(picture.src)
        
        await picture.save();
        
        res.send(picture);
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

export const deleteImages = async (req, res) => {
    try {
        const id = req.params.id;

        const picture = await findImagesByIdService(id);

        await deleteImageService(id);

        fs.unlinkSync(picture.src);
        
        res.send({message: "Imagem deletada com sucesso"});
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}