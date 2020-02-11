const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkiesSchema = new Schema ({
    walkerName: String,
    startDateTime: String,
    endDateTime: String,
    status: String,
    // dogParticipants: [{
    //     dogId: Number,
    //     bookingStatus: Boolean,
    //     invoiceId: Number,
    //     cost: Number,
    //     poops: Number,
    //     pickUp: String,
    //     notes: String
    // }],
});

const WalkiesModel = mongoose.model('Walker', walkiesSchema);

module.exports = WalkiesModel;