import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProduitService } from '../../services/produitService'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-modifier-produit', 
  templateUrl: './modifier-produit.component.html', 
  styleUrls: ['./modifier-produit.component.css'], 
  standalone: true, 
  imports: [CommonModule, FormsModule],
})
export class ModifierProduitComponent implements OnInit {
  // Initialisation de l'objet produit avec des valeurs par défaut
  produit: any = { nom: '', prix: 0, categorie: '' };

 
  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'ID depuis les paramètres de la route
    if (id) {
      this.produitService.getProduitById(id).subscribe(
        (data) => {
          this.produit = data; // Remplit le formulaire avec les données récupérées
        },
        (error) => {
          console.error('Erreur lors du chargement du produit :', error); // Log en cas d'échec
        }
      );
    }
  }


  modifierProduit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'ID depuis les paramètres de la route
    if (id) {
      this.produitService.modifierProduit(id, this.produit).subscribe(
        () => {
          alert('Produit modifié avec succès !'); //  succès
          this.router.navigate(['/produits']); 
        },
        (error) => {
          console.error('Erreur lors de la modification :', error); // Log en cas d'échec
        }
      );
    }
  }
}
