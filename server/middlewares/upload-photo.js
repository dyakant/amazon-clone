const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.secretAccessKey,
    accessKeyId: process.env.accessKeyId
});

const s3 = aws.s3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "daa-amazon-clone-v1",
        acl: "public-read",
        metadata: (req, file, cb) => {
            cb(null, {
                fieldName: file.fieldName
            });
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString());
        }
    })
});

module.exports = upload;