const WalkiesModel = require('../models/Walkies.model');

class WalkControl {

    async newWalk(body) {
        let status = 0;
        let msg = "";

        console.log(body);

        try {
            await WalkiesModel.create(body);
            status = 200;
            msg = "New walk added";
        }
        catch (e) {
            //await this.updateById(body._id, body);
            console.log(e)
            status = 400;
            msg = "Failed to add walk";
        }
        return { status: status, msg: msg };
    }
}

module.exports = WalkControl