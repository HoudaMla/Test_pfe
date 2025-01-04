var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produitSchema = new Schema({

    nom: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    

});

module.exports = mongoose.model('produit', produitSchema);