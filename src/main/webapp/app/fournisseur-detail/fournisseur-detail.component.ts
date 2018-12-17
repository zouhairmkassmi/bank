import { Component, OnInit } from '@angular/core';
import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { JhiDataUtils } from 'ng-jhipster';
import { ActivatedRoute } from '@angular/router';
import { FournisseurService } from 'app/entities/fournisseur';
import { Produit } from 'app/shared/model/produit.model';

@Component({
  selector: 'jhi-fournisseur-detail',
  templateUrl: './fournisseur-detail.component.html',
  styles: ['./fournisseur-detail.component.css']
})
export class FournisseurDetailComponent implements OnInit {
  fournisseur: IFournisseur;
  produits: Produit[];
  constructor(private dataUtils: JhiDataUtils, private activatedRoute: ActivatedRoute, private fournisseurService: FournisseurService ) {}

  ngOnInit() {
      // this.activatedRoute.data.subscribe(({ data }) => {

        const id = this.activatedRoute.snapshot.params['id'];
      // console.log(id);
      this.fournisseurService.find(id).subscribe(fournisseur => {
          this.fournisseur = fournisseur.body;
          this.produits = this.fournisseur.produits;
      });
      // });
  }

  byteSize(field) {
      return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
      return this.dataUtils.openFile(contentType, field);
  }
}
