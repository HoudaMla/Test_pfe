var express = require('express');

var produitController = require('../src/produit/produitController');

const router = express.Router();

//crud produit
router.route('/api/produits').post(produitController.createproduitControllerFn);
router.route('/api/produits').get(produitController.getproduitControllerFn);
router.route('/api/produits/:id').delete(produitController.deleteproduitControllerFn);
router.route('/api/produits/:id').patch(produitController.updateproduitControllerFn);
router.route('/api/produits/:id').get(produitController.getproduitIdFn);


module.exports = router;
