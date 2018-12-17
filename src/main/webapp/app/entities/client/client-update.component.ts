import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { IClient } from 'app/shared/model/client.model';
import { ClientService } from './client.service';
import { IUser, UserService } from 'app/core';
import { IRating } from 'app/shared/model/rating.model';
import { RatingService } from 'app/entities/rating';
import { IAdresse } from 'app/shared/model/adresse.model';
import { AdresseService } from 'app/entities/adresse';
import { IContrat } from 'app/shared/model/contrat.model';
import { ContratService } from 'app/entities/contrat';
import { IEmprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from 'app/entities/emprunt';

@Component({
    selector: 'jhi-client-update',
    templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent implements OnInit {
    private _client: IClient;
    isSaving: boolean;

    users: IUser[];

    ratings: IRating[];

    adresses: IAdresse[];

    contrats: IContrat[];

    emprunts: IEmprunt[];

    constructor(
        private dataUtils: JhiDataUtils,
        private jhiAlertService: JhiAlertService,
        private clientService: ClientService,
        private userService: UserService,
        private ratingService: RatingService,
        private adresseService: AdresseService,
        private contratService: ContratService,
        private empruntService: EmpruntService,
        private elementRef: ElementRef,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ client }) => {
            this.client = client;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.ratingService.query().subscribe(
            (res: HttpResponse<IRating[]>) => {
                this.ratings = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.adresseService.query().subscribe(
            (res: HttpResponse<IAdresse[]>) => {
                this.adresses = res.body;
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
        this.dataUtils.clearInputImage(this.client, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.client.id !== undefined) {
            this.subscribeToSaveResponse(this.clientService.update(this.client));
        } else {
            this.subscribeToSaveResponse(this.clientService.create(this.client));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IClient>>) {
        result.subscribe((res: HttpResponse<IClient>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackRatingById(index: number, item: IRating) {
        return item.id;
    }

    trackAdresseById(index: number, item: IAdresse) {
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
    get client() {
        return this._client;
    }

    set client(client: IClient) {
        this._client = client;
    }
}
