import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IEmprunt } from 'app/shared/model/emprunt.model';

@Component({
    selector: 'jhi-emprunt-detail',
    templateUrl: './emprunt-detail.component.html'
})
export class EmpruntDetailComponent implements OnInit {
    emprunt: IEmprunt;

    constructor(private dataUtils: JhiDataUtils, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
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
    previousState() {
        window.history.back();
    }
}
