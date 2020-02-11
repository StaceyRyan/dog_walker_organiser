const WalkerModel = require('../models/Dog.model');

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
            status = 204;
            msg = "Walk updated";
        }
        return { status: status, msg: msg };
    }
}

module.exports = WalkControl