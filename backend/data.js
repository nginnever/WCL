// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    wclname: String,
    wclemail: String,
    password: String,
    Hfaction: String,
    Afaction: String,
    serverSelect: String,
    wclclass: String,
    wclprofile: String,
    wclprofileimage: { data: Buffer, contentType: String }
    // image: { data: Buffer, contentType: String }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", DataSchema);