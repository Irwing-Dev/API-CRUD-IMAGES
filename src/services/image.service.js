import Image from "../models/Image.js";

export const uploadImageService = (name, file) => new Image({name, src: file.path});

export const findImagesService = () => Image.find();

export const findImagesByIdService = (id) => Image.findById(id);

export const updateImageService = (id, name, file) => Image.findOneAndUpdate({_id: id}, { name, src: file.path })