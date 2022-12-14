const Spell = require("../models/spell.models");

// see all spells
const seeSpells = async (req, res) => {
  try {
    Spell.find({}).then(function (spells) {
        res.json(spells).status(200);
        })
    }catch(err){
        res.status(500).json({ message: err });
    }
}
// see a specific spell
const oneSpell = async (req,res)=>{
    try{
    const spellFound = await Spell.findById(req.params.id).sort({date: 'desc'});
    res.json(spellFound).status(200);
    }
    catch(err){
        res.status(500).json({ message: err });
    }
}

// create a new spell
const newSpell = async (req, res) => {
    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    try{
    const newSpell = new Spell(
        {level, name, casting_time, duration, range, attack_save, effect});
        await newSpell.save();
        res.json(newSpell).status(200);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}

//Update a spell
const editSpell = async (req,res)=>{
    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    try{
    const spellEdited = await Spell.findByIdAndUpdate(req.params.id, 
        {level, name, casting_time, duration, range, attack_save, effect});
    //res.redirect('/')
    res.json(spellEdited).status(200)
    }
    catch{
        res.status(500).json({ message: err });
    }
}

// delete a spell
const deleteSpell = async (req, res)=>{
    try{
    const deleteSpell = await Spell.findByIdAndDelete(req.params.id);
    //res.redirect('/');
    res.status(202).json(deleteSpell);
    }
    catch{
        res.status(500).json({ message: err });
    }
}

module.exports = {
    deleteSpell,
    seeSpells,
    newSpell,
    oneSpell,
    editSpell
}
