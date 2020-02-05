const express = require('express');
const AvatarUploader = express.Router();
const Busboy = require('busboy');
const fs = require('fs');

AvatarUploader.use((req, res) => {
    console.log("Avatar Uploader invoked");
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log("attempting to save");
        const saveTo = './uploads/' + filename;
        file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('Upload complete', function() {
        console.log("file uploaded");
        res.send("Avatar uploaded!");
    });
    return req.pipe(busboy);
})