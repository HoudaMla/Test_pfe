var produitService = require('./produitService');
const produitSchema = require('./produitModel');
const bcrypt = require('bcrypt');

var createproduitControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await produitService.createproduitDBService(req.body);
    console.log(status);


    if (status) {
        res.send({ "status": true, "message": "produit created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating produit" });
    }
}
catch(err)
{
    console.log(err);
}
}

var getproduitControllerFn =(req,res,next)=>{
    produitSchema.find()
    .then(resultat=>{
        res.status(200).json(
            resultat
    )})
    .catch(err=>{
        res.status(404).json({
        massage :err 

    })})
}


var deleteproduitControllerFn =(req , res,next)=>{
    produitSchema.deleteOne({_id : req.params.id}).
    then(resualt =>{
      if (resualt) {
        res.status(200).json({
          massage : ' produitect deleted'
        })
      } else {
        res.status(404).json({
          massage : ' produitect not found'
        })
      }
    }).
    catch(err => {
      res.status(404).json({
        massage: err
      })
    }) 

};

var updateproduitControllerFn = (req, res, next) => {
    
    const produit = {
        nom: req.body.nom,
        prix: req.body.prix,
        categorie: req.body.categorie,
       
       
    };
    produitSchema.findOneAndUpdate({ _id: req.params.id }, produit, { new: true }) 
        .then(result => {
            if (result) {
                
                res.status(202).json({
                    message: 'produit updated successfully',
                    updatedproduitect: result 
                });
            } else {
                res.status(404).json({
                    message: 'produit not found'
                });
            }
        })
        .catch(err => {
            console.error('Error updating produit:', err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
};



const getproduitIdFn = (req, res, next) => {
    produitSchema.findById(req.params.id)
        .then(resultat => {
            if (!resultat) {
                return res.status(404).json({
                    message: "produit introuvable",
                });
            }
            res.status(200).json(resultat);
        })
        .catch(err => {
            res.status(500).json({
                message: "Erreur lors de la recherche du produit",
                error: err
            });
        });
};




module.exports = { createproduitControllerFn, getproduitControllerFn ,deleteproduitControllerFn , updateproduitControllerFn,getproduitIdFn};