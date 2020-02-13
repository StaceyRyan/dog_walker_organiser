const express = require('express');
const Busboy = require('busboy');
const fs = require('fs');
const path = require('path');
const AvatarUploader = express.Router();

const avatarFolder = path.resolve(__dirname, './avatarFolder');


if (!fs.existsSync(avatarFolder)) {
    fs.mkdirSync(avatarFolder);
}

AvatarUploader.post ("/uploadAvatar", async (req, res) => {
        console.log("upload endpoint");
        const mbSizeLimit = 20;
        const busboy = new Busboy({ 
            headers: req.headers, 
            limits: {fileSize: mbSizeLimit * 1000} });
        let responseMsg = "file uploaded";
        let status = 201;
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            console.log("attempting to save file: " + filename);
            const saveTo = path.resolve(uploadFolder, filename);

            file.on('limit', (data) => {
                responseMsg = "file size reached";
                status = 413;
                fs.unlink(saveTo, () => { });
            });

            file.pipe(fs.createWriteStream(saveTo));
        });
        busboy.on('field', (fieldName, value, fieldNameTruncated) => {
            console.log(`Field event: field name: ${fieldName}, value: ${value}`);
            dog[avatar] = value;
        });

        busboy.on('finish', async () => {
            console.log(responseMsg);
            const newdbRecord = await Dog.create(dog);
            res.status(status)
                .send({ id: newdbRecord.id });
        });
        return req.pipe(busboy);
    });

module.exports = AvatarUploader;
