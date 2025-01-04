import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { ProduitService } from '../../services/produitService'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ajouter-produit', 
  templateUrl: './ajouter-produit.component.html', 
  styleUrls: ['./ajouter-produit.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule], 
})
export class AjouterProduitComponent {
  // Définition du produit à ajouter avec des champs par défaut
  produit = { nom: '', prix: 0, categorie: '' };

  constructor(private produitService: ProduitService, private router: Router) {}

  ajouterProduit(): void {
    // Appel au service pour ajouter le produit
    this.produitService.ajouterProduit(this.produit).subscribe(
      () => {
        // Succès 
        alert('Produit ajouté avec succès !');
        this.router.navigate(['/produits']); 
      },
      (error) => {
        // En cas d'erreur 
        console.error('Erreur lors de l’ajout du produit :', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    );
  }
}
