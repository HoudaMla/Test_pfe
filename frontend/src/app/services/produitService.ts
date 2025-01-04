import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'http://localhost:3003/api/produits';
  
  constructor(private http: HttpClient) {}

  getProduits(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProduitById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  ajouterProduit(produit: any): Observable<any> {
    return this.http.post(this.apiUrl, produit);
  }

  modifierProduit(id: string, produit: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, produit);
  }

  supprimerProduit(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
