const { Schema, model } = require('mongoose');

const charactersSchema = new Schema({
  characterName: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true 
  },
  race: {
    type: String,
    required: true 
  },
  stats: {
    str:{
      type: Number,
      required: true 
    },
    dex:{
      type: Number,
      required: true
    },
    con:{
      type: Number,
      required: true
    },
    int:{
      type: Number,
      required: true
    },
    wis:{
      type: Number,
      required: true
    },
    cha:{
      type: Number,
      required: true
    }
  },   
  armorClass: { 
    type: Number,
    required: true 
  },
  speed: { 
    type: Number, 
    validator: function(speed) {
      return speed%5==0;
    },
    message: props => `${props.value} is not a valid Speed!`,
    required: true
  },
  hitPointMax: { 
    type: Number,
    required: true
  },
  weapons: [],
  spellsKnown: []

});

module.exports = model('characters', charactersSchema);
