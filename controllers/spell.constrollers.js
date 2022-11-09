const Spell = require ('../models/spell.models');

// see all spells
const seeSpells = async (req,res)=>{
    try{
        const spells = await Spell.find({})
        .lean()
        .sort({date: 'desc'});
        res.render('../views/spells/all-spells.hbs', { spells }).status(200);
    }catch(err){
        res.status(500)
    }
}
const testGetSpells = async (req, res) => {
    try{
        const spells = await Spell.find({})
        .lean()
        .sort({date: 'desc'});
        res.status(200).json(spells);
    }catch(err){
        res.status(500)
    }
}

// see a specific spell
const oneSpell = async (req,res)=>{
    const spellFound = await Spell.findById(req.params.id).sort({date: 'desc'})
    res.json(spellFound)
}

// create a new spell
const newSpell = async (req, res)=>{

    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    
    const newSpell = new Spell(
        {level, name, casting_time, duration, range, attack_save, effect});
        await newSpell.save();
        res.json(newSpell)
}

//Update a spell
const editSpell = async (req,res)=>{
    const {level, name, casting_time, duration, range, attack_save, effect} = req.body;
    const spellEdited = await Spell.findByIdAndUpdate(req.params.id, 
        {level, name, casting_time, duration, range, attack_save, effect});
    //res.redirect('/')
    //req.flash('success_msg', 'Game has been updated successfully')
    res.redirect('/spell')
}
const seeEdition = async (req,res)=>{
    const spellsi = await Spell.findById(req.params.id).lean()
    res.render('../views/spells/edit-spells.hbs', {spellsi})
  }


// delete a spell
const deleteSpell = async (req, res)=>{
    await Spell.findByIdAndDelete(req.params.id);
    //res.redirect('/');
    res.redirect('/spell');
}

module.exports = {
    deleteSpell,
    seeSpells,
    newSpell,
    oneSpell,
    editSpell,
    seeEdition,
    testGetSpells
}