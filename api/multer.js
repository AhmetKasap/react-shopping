const multer = require('multer');

const path = require('path');
const fs = require("fs");
 

const allowedMimeTypes = [".jpg", ".jpeg", ".png"]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {   //* hedefi gösteriyoruz (dosyanın nereye yükleneceğini belirtiyoruz.)
        const rootDir = path.dirname(require.main.filename) //* ana dosyanın tam yolunu aldık. 
        fs.mkdirSync(path.join(rootDir, "/public/uploads"), { recursive: true }) //* "/public/uploads" dizinin oluştur ve rootDir ile birleştir.
        cb(null, path.join(rootDir, "/public/uploads"));
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); //* benzersiz bir sayı oluştur.
    
        const originalName = file.originalname; //* kullanıcının girdiği resmin orijinal adını al.
        const ext = path.extname(originalName); //* orijinal adın uzantısını al. (.jpg gibi)
        const url = 'images' + '-' + uniqueSuffix + ext; //* benzersiz değer ile birlikte dosyayı "public/uploads" klasörü altına kaydet.
    
        if (!req.savedImages) req.savedImages = []; //* req.savedImages adında bir dizi oluştur, tanımlı değilse
    
        if (allowedMimeTypes.includes(ext)) {
            try {
                if (req.savedImages.length >= 3) {
                    const error = new Error('En fazla 3 dosya yükleyebilirsin');
                    error.status = 400;
                    return cb(error);
                } else {
                    req.savedImages = [...req.savedImages, url]; //* gelen fotoğrafı savedImages dizisine ekleyin. 
                    cb(null, url); 
                }
            } catch (error) {
                cb(error);
            }
        } else {
            try {
                const error = new Error('Bu resim türü desteklenmemektedir.');
                error.status = 400;
                return cb(error);
            } catch (error) {
                cb(error);
            }
        }
    }
    
 
    
});

const upload = multer({ storage: storage });



module.exports = upload