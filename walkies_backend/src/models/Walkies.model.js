const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkiesSchema = new Schema ({
    walkerName: String,
    startDateTime: Date,
    endDateTime: Date,
    numberOfDogs: Number,
    dogParticipants: [{
        dogId: Number,
        invoiceId: Number,
        cost: Number,
        poops: Number,
        pickUp: String,
        notes: String
    }],
});

const WalkiesModel = mongoose.model('Walker', walkiesSchema);

module.exports = WalkiesModel;