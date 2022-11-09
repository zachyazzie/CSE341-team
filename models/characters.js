const { Schema, model } = require('mongoose');
const {weaponSchema, schema } = require('./weapons');

const charactersSchema = new Schema({
  characterName: { type: String},
  class: { type: String },
  race: { type: String },
  //background: { type: String },
  stats: {
    str:{type: Number},
    dex:{type: Number},
    con:{type: Number},
    int:{type: Number},
    wis:{type: Number},
    cha:{type: Number}
  },   
  armorClass: { type: Number },
  speed: { type: Number, 
           validator: function(speed) {
             return speed%5==0;
           },
           message: props => `${props.value} is not a valid Speed!`
  },
  hitPointMax: { type: Number },
  //currentHitPoints: { type: Number },
  weapon1:{
    type: schema,
    default: {}
  },
  spellsKnown: []

});

module.exports = model('characters', charactersSchema);
