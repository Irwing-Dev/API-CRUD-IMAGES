import multer from "multer";
import path from "path";
// import sls from "/Users/Usuario/Desktop/Meus projetos/Estudos/Node/CRUD images/src/uploads"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Users/Usuario/Desktop/Meus projetos/Estudos/Node/CRUD images/src/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
})

// const filefilter = (req, file, cb) => {
//     var ext = path.extname(file.originalname);
//     if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.svg' && ext !== '.webp') {
//       cb(null, false);
//     } else {
//         cb(null, true)
//     }
// }

const upload = multer({ storage: storage  })

export default upload