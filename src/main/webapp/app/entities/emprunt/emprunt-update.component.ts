import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';

import { IEmprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from './emprunt.service';

@Component({
    selector: 'jhi-emprunt-update',
    templateUrl: './emprunt-update.component.html'
})
export class EmpruntUpdateComponent implements OnInit {
    private _emprunt: IEmprunt;
    isSaving: boolean;
    date: string;

    constructor(
        private dataUtils: JhiDataUtils,
        private empruntService: EmpruntService,
        private elementRef: ElementRef,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ emprunt }) => {
            this.emprunt = emprunt;
        });
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
        this.dataUtils.clearInputImage(this.emprunt, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.emprunt.date = moment(this.date, DATE_TIME_FORMAT);
        if (this.emprunt.id !== undefined) {
            this.subscribeToSaveResponse(this.empruntService.update(this.emprunt));
        } else {
            this.subscribeToSaveResponse(this.empruntService.create(this.emprunt));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IEmprunt>>) {
        result.subscribe((res: HttpResponse<IEmprunt>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get emprunt() {
        return this._emprunt;
    }

    set emprunt(emprunt: IEmprunt) {
        this._emprunt = emprunt;
        this.date = moment(emprunt.date).format(DATE_TIME_FORMAT);
    }
}
