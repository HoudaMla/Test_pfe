import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produitService';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-liste', 
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class ProduitListeComponent implements OnInit {
  produits: any[] = []; // Tableau pour stocker les produits récupérés

  constructor(private produitService: ProduitService, private router: Router) {}


  ngOnInit(): void {
    this.getProduits();
  }

  // Récupère la liste des produits depuis l'API
  getProduits(): void {
    this.produitService.getProduits().subscribe(
      (data) => {
        this.produits = data; // Met à jour le tableau des produits
        console.log(this.produits); 
      },
      (error) => console.error('Erreur:', error) // Log en cas d'erreur
    );
  }

  
  supprimerProduit(id: string): void {
    this.produitService.supprimerProduit(id).subscribe(() => {
      this.getProduits(); // Recharge la liste après suppression
    });
  }

  //  Navigue vers la page d'ajout de produit
  
  onClick(): void {
    this.router.navigate(['/produits/ajouter']);
  }

  //  Navigue vers la page des détails d'un produit
   
  onClick1(id: string): void {
    this.router.navigate([`/produits/${id}`]);
  }

  //  Navigue vers la page de modification d'un produit
  Update(id: string): void {
    this.router.navigate([`/produits/modifier/${id}`]);
  }
}
