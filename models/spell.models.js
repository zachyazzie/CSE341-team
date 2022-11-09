const mongoose = require('mongoose');

const spellModel = new mongoose.Schema({
    level:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    casting_time:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    range:{
        type: String,
        required: true
    },
    attack_save:{
        type: String,
        required: true
    },
    effect:{
        type: String,
        required: true
    },
    },{
        timestamps: true,
    }
)

module.exports = mongoose.model("Spell", spellModel);