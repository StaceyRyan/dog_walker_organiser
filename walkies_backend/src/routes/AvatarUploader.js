const express = require('express');
const Busboy = require('busboy');
const fs = require('fs');
const path = require('path');

const avatarFolder = './avatarFolder';

if (!fs.existsSync(avatarFolder)){
    fs.mkdirSync(avatarFolder);
}

const AvatarUploader = (req, res) => {
    console.log("upload endpoint");
    const kbSizeLimit = 100;
    const busboy = new Busboy({ headers: req.headers, limits: {fileSize: kbSizeLimit * 1000} });
    let responseMsg = "file uploaded";
    let status = 201;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        console.log("attempting to save file: " + filename);
        const saveTo = path.join(uploadFolder, filename);

        file.on('limit', (data) => {
            responseMsg = "file size reached";
            status = 413; 
            fs.unlink(saveTo, () => {});
        });

        file.pipe(fs.createWriteStream(saveTo));
        busboy.on('field', (fieldName, value, fieldNameTruncated) => {
            console.log(`Field event: field name: ${fieldName}, value: ${value}`);
            //todo log to database etc etc
        } );
    
        busboy.on('finish', () => {
            console.log(responseMsg);
            res.status(status).send(responseMsg);
        });
        return req.pipe(busboy); 
    });
}

module.exports = AvatarUploader;
