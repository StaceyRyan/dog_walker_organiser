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

    async findAll() {
        return WalkiesModel.find({})
    }

    async deleteById(walkId) {
        const deleteWalk = await WalkiesModel.deleteOne({ _id: walkId });
        if (deleteWalk.deletedCount > 0) {
            return `Walk ${WalkiesModel.name} deleted`;
        }
        return `${WalkiesModel.name} unable to be deleted`;
    }
}

module.exports = WalkControl