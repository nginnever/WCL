// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    username: String,
    email: String,
    passwordHash: String,
    faction: String,
    server: String,
    class: String,
    profile: String,
    image: { data: Buffer, contentType: String }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);