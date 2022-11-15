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
    const spellFound = await Spell.findById(req.params.id).sort({date: 'desc'})
    res.json(spellFound).status(200)

}

// create a new spell
const newSpell = async (req, res)=>{

    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    try{
    const newSpell = new Spell(
        {level, name, casting_time, duration, range, attack_save, effect});
        await newSpell.save();
        res.json(newSpell).status(201)
    }
    catch (err) {
        res.status(500)
    }
}

//Update a spell
const editSpell = async (req,res)=>{
    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    const spellEdited = await Spell.findByIdAndUpdate(req.params.id, 
        {level, name, casting_time, duration, range, attack_save, effect});
    //res.redirect('/')
    res.json(spellEdited)
}

// delete a spell
const deleteSpell = async (req, res)=>{
    await Spell.findByIdAndDelete(req.params.id);
    //res.redirect('/');
    res.json('message: delete spells here')
}

module.exports = {
    deleteSpell,
    seeSpells,
    newSpell,
    oneSpell,
    editSpell
}