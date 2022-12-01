const Spell = require ('../models/spell.models');

// see all spells
const seeSpells = async (req,res)=>{
    try{
    Spell.find({}).then(function (spells) {
        res.json(spells).status(200);
        })
    }catch(err){
        res.status(500)
    }
}
// see a specific spell
const oneSpell = async (req,res)=>{
    try{
    const spellFound = await Spell.findById(req.params.id).sort({date: 'desc'})
    res.json(spellFound).status(200)
    }
    catch(err){
        res.json(err).status(404)
    }
}

// create a new spell
const newSpell = async (req, res)=>{

    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    try{
    const newSpell = new Spell(
        {level, name, casting_time, duration, range, attack_save, effect});
        await newSpell.save();
        res.json(newSpell).status(200)
    }
    catch (err) {
        res.status(500)
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
        res.status(500)
    }
}

// delete a spell
const deleteSpell = async (req, res)=>{
    try{
    await Spell.findByIdAndDelete(req.params.id);
    //res.redirect('/');
    res.status(200);
    }
    catch{
        res.status(500);
    }
}

module.exports = {
    deleteSpell,
    seeSpells,
    newSpell,
    oneSpell,
    editSpell
}
