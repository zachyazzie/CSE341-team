const weaponSchema = require('../models/weapons');

//GETS ALL WEAPONS
async function getAllWeapons(req, res) {
  try {
    const weapons = await weaponSchema.find();
    res.status(200).json(weapons);
  } catch (err) {
    res.status(500).json({ message: err });
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

//UPDATE A WEAPON
async function updateWeapon(req, res) {
  try {
    const updateWeapon = await weaponSchema.findOneAndUpdate(
      { _id: req.params.postId },
      {
        weaponName: req.body.weaponName,
        description: req.body.description,
        category: req.body.category,
        damage: req.body.damage,
        damageType: req.body.damageType,
        itemRarity: req.body.itemRarity,
        properties: req.body.properties,
        weight: req.body.weight,
      }
    );

    res.status(200).json(updateWeapon);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//DELETE A WEAPON
async function deleteWeapon(req, res) {
  try {
    const deleteWeapon = await weaponSchema.deleteOne({
      _id: req.params.postId,
    });
    res.status(202).json(deleteWeapon);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getAllWeapons,
  getOneWeapon,
  createWeapon,
  updateWeapon,
  deleteWeapon,
};
