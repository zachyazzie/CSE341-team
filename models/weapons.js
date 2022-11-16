const {Schema} = require('mongoose');

const weaponsSchema = new Schema({
  weaponName: { type: String, unique: true },
  description: { type: String },
  category: { type: String },
  damage: { type: String },
  damageType: { type: String },
  itemRarity: { type: String },
  properties: { type: String },
  weight: { type: Number },
});

module.exports = model('Weapons', weaponsSchema);
