import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IContrat } from 'app/shared/model/contrat.model';
import { ContratService } from './contrat.service';
import { IProduit } from 'app/shared/model/produit.model';
import { ProduitService } from 'app/entities/produit';
import { IEmprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from 'app/entities/emprunt';
import { ITransaction } from 'app/shared/model/transaction.model';
import { TransactionService } from 'app/entities/transaction';
import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { FournisseurService } from 'app/entities/fournisseur';
import { IClient } from 'app/shared/model/client.model';
import { ClientService } from 'app/entities/client';

@Component({
    selector: 'jhi-contrat-update',
    templateUrl: './contrat-update.component.html'
})
export class ContratUpdateComponent implements OnInit {
    private _contrat: IContrat;
    isSaving: boolean;

    produits: IProduit[];

    emprunts: IEmprunt[];

    transactions: ITransaction[];

    fournisseurs: IFournisseur[];

    clients: IClient[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private contratService: ContratService,
        private produitService: ProduitService,
        private empruntService: EmpruntService,
        private transactionService: TransactionService,
        private fournisseurService: FournisseurService,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ contrat }) => {
            this.contrat = contrat;
        });
        this.produitService.query().subscribe(
            (res: HttpResponse<IProduit[]>) => {
                this.produits = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.empruntService.query().subscribe(
            (res: HttpResponse<IEmprunt[]>) => {
                this.emprunts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.transactionService.query().subscribe(
            (res: HttpResponse<ITransaction[]>) => {
                this.transactions = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.fournisseurService.query().subscribe(
            (res: HttpResponse<IFournisseur[]>) => {
                this.fournisseurs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.clientService.query().subscribe(
            (res: HttpResponse<IClient[]>) => {
                this.clients = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.contrat.id !== undefined) {
            this.subscribeToSaveResponse(this.contratService.update(this.contrat));
        } else {
            this.subscribeToSaveResponse(this.contratService.create(this.contrat));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IContrat>>) {
        result.subscribe((res: HttpResponse<IContrat>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackEmpruntById(index: number, item: IEmprunt) {
        return item.id;
    }

    trackTransactionById(index: number, item: ITransaction) {
        return item.id;
    }

    trackFournisseurById(index: number, item: IFournisseur) {
        return item.id;
    }

    trackClientById(index: number, item: IClient) {
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
    get contrat() {
        return this._contrat;
    }

    set contrat(contrat: IContrat) {
        this._contrat = contrat;
    }
}
