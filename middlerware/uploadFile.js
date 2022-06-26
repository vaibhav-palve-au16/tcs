const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname)
    cb(null, Date.now()+ext)
  }
})

const upload = multer({
  storage: storage,
  filefilter: function (req, file, cb) {
    cb(null, false)
    cb(null, true)
    cb(new Error('I don\'t have a clue!'))

  },
  limit: {
    fileSize: 1024 * 1024 * 2
  }
})

module.exports =  upload 