import Image from "../models/Image.js";

export const uploadImageService = (name, file) => new Image({name, src: file.path});