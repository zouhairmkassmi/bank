import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ICategorie } from 'app/shared/model/categorie.model';
import { CategorieService } from './categorie.service';
import { IProduit } from 'app/shared/model/produit.model';
import { ProduitService } from 'app/entities/produit';
import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { FournisseurService } from 'app/entities/fournisseur';

@Component({
    selector: 'jhi-categorie-update',
    templateUrl: './categorie-update.component.html'
})
export class CategorieUpdateComponent implements OnInit {
    private _categorie: ICategorie;
    isSaving: boolean;

    produits: IProduit[];

    fournisseurs: IFournisseur[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private categorieService: CategorieService,
        private produitService: ProduitService,
        private fournisseurService: FournisseurService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ categorie }) => {
            this.categorie = categorie;
        });
        this.produitService.query().subscribe(
            (res: HttpResponse<IProduit[]>) => {
                this.produits = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.fournisseurService.query().subscribe(
            (res: HttpResponse<IFournisseur[]>) => {
                this.fournisseurs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.categorie.id !== undefined) {
            this.subscribeToSaveResponse(this.categorieService.update(this.categorie));
        } else {
            this.subscribeToSaveResponse(this.categorieService.create(this.categorie));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICategorie>>) {
        result.subscribe((res: HttpResponse<ICategorie>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackProduitById(index: number, item: IProduit) {
        return item.id;
    }

    trackFournisseurById(index: number, item: IFournisseur) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get categorie() {
        return this._categorie;
    }

    set categorie(categorie: ICategorie) {
        this._categorie = categorie;
    }
}
