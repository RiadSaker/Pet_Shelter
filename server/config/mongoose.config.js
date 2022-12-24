const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Pets DB is up.."))
    .catch(() => console.log("DB Failed.."))