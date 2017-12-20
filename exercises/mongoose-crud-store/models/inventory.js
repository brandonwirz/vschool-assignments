const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GunSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: Number,
    color: String,
    info: {
        brand: String,
        kind: String,
  }
})


module.exports = mongoose.model("Gun", GunSchema);
