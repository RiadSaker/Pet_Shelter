const mongoose = require("mongoose")

var uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the pets name"],
        minLength: [3, "The pets name must be at least 3 characters"],
        maxLength: [55, "The pets name can not me more than 55 characters"]
    },
    petType: {
        type: String,
        required: [true, "Please enter the type of pet it is"],
        minLength: [3, "The type of pet must be at least 3 characters"],
        maxLength: [55, "The type of pet can not me more than 55 characters"]
    },
    description: {
        type: String,
        required: [true, "Please tell us more about the pet"],
        minLength: [3, "The pet description must be at least 3 characters"],
        maxLength: [255, "The pet description can not me more than 55 characters"]
    },
    tricks: {
        type: [String]
    },
    likes: {
        type: Number
    }
}, {timestamps:true})

PetSchema.plugin(uniqueValidator, {
    message: "This name is already used!",
  });

module.exports = mongoose.model("Pet", PetSchema)