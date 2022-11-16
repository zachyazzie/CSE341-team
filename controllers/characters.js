const characterSchema  = require('../models/characters');


//GETS ALL characters
async function getAllCharacters(req, res) {
    try {
      const characters = await characterSchema.find();
      res.status(200).json(characters);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
  
  //GETS A SPECIFIC character
  async function getOneCharacter(req, res) {
    try {
      const character = await characterSchema.findById(req.params.id);
      res.status(200).json(character);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
  
  //CREATES A character
  async function createCharacter(req, res) {
    try {
      const character = new characterSchema({
        characterName: req.body.characterName,
        class: req.body.class,
        race: req.body.race,
        stats: {
            str: req.body.str,
            dex: req.body.dex,
            con: req.body.con,
            int: req.body.int,
            wis: req.body.wis,
            cha: req.body.cha
        },
        armorClass: req.body.armorClass,
        speed: req.body.speed,
        hitPointMax: req.body.hitPointMax,
        weapons: [req.body.weapon],
        spellsKnown: [req.body.spellsKnown]
      
      });
      const savedCharacter = await character.save();
      res.status(201).json(savedCharacter );
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  //Update A character
  async function updatedCharacter(req, res) {
    try {
        const updatedCharacter = await characterSchema.findOneAndUpdate({_id:req.params.id}, 
            {   characterName: req.body.characterName,
                class: req.body.class,
                race: req.body.race,
                stats: {
                    str: req.body.str,
                    dex: req.body.dex,
                    con: req.body.con,
                    int: req.body.int,
                    wis: req.body.wis,
                    cha: req.body.cha
                },
                armorClass: req.body.armorClass,
                speed: req.body.speed,
                hitPointMax: req.body.hitPointMax,
                weapons: [req.body.weapon],
                spellsKnown: [req.body.spellsKnown]
              }    
        );

      res.status(200).json(updatedCharacter);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  //Delete A character
  async function deleteCharacter(req, res) {
    try {
      const deleteCharacter = await characterSchema.deleteOne({_id:req.params.id});  
      res.status(202).json(deleteCharacter);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }


module.exports = {
    getAllCharacters,
    getOneCharacter,
    createCharacter ,
    updatedCharacter,
    deleteCharacter,
  };