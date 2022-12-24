const Pet = require("../models/pet.model")

module.exports.createPet = (req,res) => {
    Pet.exists({name: req.body.name})
        .then(petExists => {
            if(petExists) return Promise.reject({errors:{name:{message:"Sorry, but we already have a pet with this name"}}})
            return Pet.create(req.body)
        })
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

module.exports.fetchAllPets = (req,res) => {
    Pet.find().sort({petType:1})
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
}

module.exports.fetchPetById = (req,res) => {
    Pet.findById({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req,res) => {
    Pet.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req,res) => {
    Pet.findByIdAndDelete({_id:req.params.id})
        .then(results => res.json(results))
        .catch(err => res.json(err))
}