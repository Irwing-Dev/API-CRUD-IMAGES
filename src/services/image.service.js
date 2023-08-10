import Image from "../models/Image.js";

export const uploadImageService = (name, file) => new Image({name, src: file.path});

export const findImagesService = (offset, limit) => Image.find().sort({ _id: -1 }).skip(offset).limit(limit);

export const countImages = () => Image.countDocuments();

export const findImagesByIdService = (id) => Image.findById(id);

export const updateImageService = (id, name, file) => Image.findOneAndUpdate({_id: id}, { name, src: file.path })

export const deleteImageService = (id) => Image.findOneAndDelete({_id: id});