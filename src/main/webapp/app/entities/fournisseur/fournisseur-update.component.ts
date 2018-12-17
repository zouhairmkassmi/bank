import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { FournisseurService } from './fournisseur.service';
import { IUser, UserService } from 'app/core';
import { IProduit } from 'app/shared/model/produit.model';
import { ProduitService } from 'app/entities/produit';
import { ICategorie } from 'app/shared/model/categorie.model';
import { CategorieService } from 'app/entities/categorie';
import { IAdresse } from 'app/shared/model/adresse.model';
import { AdresseService } from 'app/entities/adresse';
import { IRating } from 'app/shared/model/rating.model';
import { RatingService } from 'app/entities/rating';
import { IContrat } from 'app/shared/model/contrat.model';
import { ContratService } from 'app/entities/contrat';
import { IEmprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from 'app/entities/emprunt';

@Component({
    selector: 'jhi-fournisseur-update',
    templateUrl: './fournisseur-update.component.html'
})
export class FournisseurUpdateComponent implements OnInit {
    private _fournisseur: IFournisseur;
    isSaving: boolean;

    users: IUser[];

    produits: IProduit[];

    categories: ICategorie[];

    adresses: IAdresse[];

    ratings: IRating[];

    contrats: IContrat[];

    emprunts: IEmprunt[];

    constructor(
        private dataUtils: JhiDataUtils,
        private jhiAlertService: JhiAlertService,
        private fournisseurService: FournisseurService,
        private userService: UserService,
        private produitService: ProduitService,
        private categorieService: CategorieService,
        private adresseService: AdresseService,
        private ratingService: RatingService,
        private contratService: ContratService,
        private empruntService: EmpruntService,
        private elementRef: ElementRef,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fournisseur }) => {
            this.fournisseur = fournisseur;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.produitService.query().subscribe(
            (res: HttpResponse<IProduit[]>) => {
                this.produits = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.categorieService.query().subscribe(
            (res: HttpResponse<ICategorie[]>) => {
                this.categories = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.adresseService.query().subscribe(
            (res: HttpResponse<IAdresse[]>) => {
                this.adresses = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.ratingService.query().subscribe(
            (res: HttpResponse<IRating[]>) => {
                this.ratings = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.contratService.query().subscribe(
            (res: HttpResponse<IContrat[]>) => {
                this.contrats = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.empruntService.query().subscribe(
            (res: HttpResponse<IEmprunt[]>) => {
                this.emprunts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.fournisseur, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.fournisseur.id !== undefined) {
            this.subscribeToSaveResponse(this.fournisseurService.update(this.fournisseur));
        } else {
            this.subscribeToSaveResponse(this.fournisseurService.create(this.fournisseur));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFournisseur>>) {
        result.subscribe((res: HttpResponse<IFournisseur>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackUserById(index: number, item: IUser) {
        return item.id;
    }

    trackProduitById(index: number, item: IProduit) {
        return item.id;
    }

    trackCategorieById(index: number, item: ICategorie) {
        return item.id;
    }

    trackAdresseById(index: number, item: IAdresse) {
        return item.id;
    }

    trackRatingById(index: number, item: IRating) {
        return item.id;
    }

    trackContratById(index: number, item: IContrat) {
        return item.id;
    }

    trackEmpruntById(index: number, item: IEmprunt) {
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
    get fournisseur() {
        return this._fournisseur;
    }

    set fournisseur(fournisseur: IFournisseur) {
        this._fournisseur = fournisseur;
    }
}
