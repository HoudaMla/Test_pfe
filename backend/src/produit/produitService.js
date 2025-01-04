var produitModel = require('./produitModel');


module.exports.createproduitDBService = (produitDetails) => {
    return new Promise((resolve, reject) => {
        var produitModelData = new produitModel({
            nom: produitDetails.nom,
            prix: produitDetails.prix,
            categorie: produitDetails.categorie,
             

        });
        produitModelData.save()
            .then((result) => {
                resolve(true);
            })
            .catch((error) => {
                reject(false);
            });
            
    });
};



