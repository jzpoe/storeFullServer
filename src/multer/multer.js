const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(), // Almacenamiento en memoria
});

// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       const finalFileName = 'store' + file.fieldname + '-' + uniqueSuffix + ext;
//       cb(null, finalFileName);
//     }
//   });

  //const upload = multer({ storage });


