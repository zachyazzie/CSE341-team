const weaponSchema = require('../models/weapons');

//GETS ALL WEAPONS

async function getAllWeapons (req,res){
  try{
      const weapons = await weaponSchema.find({})
      .lean();
      res.render('../views/weapons/all-weapons.hbs', { weapons }).status(200)
  }catch(err){
      res.status(500)
  }
}

//GETS A SPECIFIC WEAPON
async function getOneWeapon(req, res) {
  try {
    const weapon = await weaponSchema.findById(req.params.postId);
    res.status(200).json(weapon);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//CREATES A WEAPON
async function createWeapon(req, res) {
  try {
    const weapon = new weaponSchema({
      weaponName: req.body.weaponName,
      description: req.body.description,
      category: req.body.category,
      damage: req.body.damage,
      damageType: req.body.damageType,
      itemRarity: req.body.itemRarity,
      properties: req.body.properties,
      weight: req.body.weight,
    });
    const savedWeapon = await weapon.save();
    res.status(201).json(savedWeapon);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getAllWeapons,
  getOneWeapon,
  createWeapon,
};
