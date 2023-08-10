import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/uploads/")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
})

const filefilter = (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.svg' && ext !== '.webp') {
      cb(null, false);
    } else {
        cb(null, true)
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter  })

export default upload