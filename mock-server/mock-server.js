const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('node:path');
const { safeStringify } = require('./util/server.util');

const PORT_MOCK_SERVER = 3051;
const MEMORY_LIMIT = 10_000_000;
const isMockUpload = true;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fileFilter = (req, file, cb) => {
  const filetypes = /.mp4|.avi|.mkv/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (extname) {
    return cb(null, true);
  } else {
    cb('Error: Videos Only!');
  }
};

const getMulterStorage = () => {
  if (isMockUpload) {
    return multer.memoryStorage();
  }

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.dirname(__filename) + '/uploads/');
    },
    filename: (req, file, cb) => {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name);
    },
  });
};

const storage = getMulterStorage();

const upload = multer({ storage: storage, limits: { fileSize: MEMORY_LIMIT } });
function uploadFiles(req, res) {
  console.log(req);
  // If no error from multer, proceed:
  if (!req.files) {
    // No file was uploaded
    return res.status(400).json({ error: 'No file uploaded. Please include a file field named "file".' });
  }

  // At this point, req.file contains metadata about the uploaded file
  // Normally, you might process the file (move it, parse it, etc.)
  // If something fails at that step, you could handle it with try/catch.

  console.log(req.files);
  try {
    // Simulate a failure condition (if needed):
    // throw new Error('Failed to process file');

    console.log(res);
    // If successful:
    return res
      .status(200)
      .json({ message: 'File uploaded successfully', status: 'completed', fileName: req.files[0].filename });
  } catch (processingError) {
    // If any error occurs in processing the file after upload
    console.error('Processing error:', processingError);
    return res.status(500).json({ error: 'Internal server error while processing the file.' });
  }
  // console.log(req.body);
}

app.post('/upload', upload.array('files'), uploadFiles);

app.listen(PORT_MOCK_SERVER, () => {
  console.log(`Mock upload server running on http://localhost:${PORT_MOCK_SERVER}`);
});
