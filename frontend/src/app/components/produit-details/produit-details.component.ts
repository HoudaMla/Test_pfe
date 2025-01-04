import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produitService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-details', 
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  produit: any = {}; // Objet pour stocker les détails du produit

  constructor(
    private route: ActivatedRoute, 
    private produitService: ProduitService, 
    private router: Router
  ) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'ID depuis l'URL
    if (id) {
      this.produitService.getProduitById(id).subscribe((data) => {
        this.produit = data; // Stocke les détails du produit
      });
    }
  }

  
  retour(): void {
    this.router.navigate(['/produits']); // Navigation vers la route de la liste des produits
  }
}
