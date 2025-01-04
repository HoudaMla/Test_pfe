import { Routes } from '@angular/router';
import { ProduitListeComponent } from './components/produit-liste/produit-liste.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';
import { ProduitDetailsComponent } from './components/produit-details/produit-details.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';

export const routes: Routes = [
  // Redirection par défaut vers la liste des produits
  {
    path: '',
    redirectTo: 'produits',
    pathMatch: 'full',
  },

  // Route pour afficher la liste des produits
  {
    path: 'produits',
    component: ProduitListeComponent,
  },

  // Route pour ajouter un nouveau produit
  {
    path: 'produits/ajouter',
    component: AjouterProduitComponent,
  },

  // Route pour afficher les détails d’un produit spécifique
  {
    path: 'produits/:id',
    component: ProduitDetailsComponent,
  },

  // Route pour modifier un produit existant
  {
    path: 'produits/modifier/:id',
    component: ModifierProduitComponent,
  },

  // Gestion des routes non trouvées
  {
    path: '**',
    redirectTo: 'produits',
  },
];
