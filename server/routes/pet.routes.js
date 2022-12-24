const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.put("/api/pets/:id", PetController.updatePet)
    app.delete("/api/pets/:id", PetController.deletePet)
    app.get("/api/pets/:id", PetController.fetchPetById)
    app.get("/api/pets", PetController.fetchAllPets)
    app.post("/api/pets", PetController.createPet)
}