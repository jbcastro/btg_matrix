var mongoose = require("mongoose");
var connec = require("./connection");

var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));

var connectionString = connec.connectionString2;
mongoose.connect(connectionString, { useNewUrlParser: true });

var connectionString = connec.connectionString2;

var mySchema = mongoose.Schema(
  {
    // winenum: { type: String },
    name: { type: String, require: true },

    grape1: { type: String },
    grape2: { type: String },
    grape3: { type: String },
    grapes: { type: String },
    year: { type: String },
    place: { type: String },
    area: { type: String },
    country: { type: String },

    appellation: { type: String },
    description1: { type: String },
    description2: { type: String },
    description3: { type: String },
    description4: { type: String },
    description5: { type: String },
    description6: { type: String },
    description7: { type: String },
    description8: { type: String },
    description9: { type: String },
    description10: { type: String },

    funfact: { type: String },
    timestamp: { type: Date },
    price: { type: Number },
    mise: { type: String },

    color: { type: String },
    status: { type: String }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Wine", mySchema);

// var Wines = mongoose.model("Wine", mySchema);

// Wines.find({}, function(err, winenum) {
//   if (err) throw err;
//   console.log(winenum);
// });

// Wines.findOne({ year: "nv" }, (err, wines) => {
//   if (err) throw err;
//   console.log(wines);
// });

// Wines.killOne({ winenum: "test1111" }, (err, wines) => {
//   if (err) throw err;
//   console.log(wines);
// });
