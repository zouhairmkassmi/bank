import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IContrat } from 'app/shared/model/contrat.model';
import { Principal } from 'app/core';
import { ContratService } from './contrat.service';
import * as jsPDF from 'jspdf';
@Component({
    selector: 'jhi-contrat',
    templateUrl: './contrat.component.html'
})
export class ContratComponent implements OnInit, OnDestroy {
    contrats: IContrat[];
    currentAccount: any;
    eventSubscriber: Subscription;
    id: any;

    constructor(
        private contratService: ContratService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.contratService.query().subscribe(
            (res: HttpResponse<IContrat[]>) => {
                this.contrats = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInContrats();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IContrat) {
        return item.id;
    }

    registerChangeInContrats() {
        this.eventSubscriber = this.eventManager.subscribe('contratListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
    downloadPDF(contrat: IContrat) {
        const doc = new jsPDF();
        console.log(contrat);
        const ref = ' ' + contrat.ref;
      doc.text('hello world ' + ref , 10, 10);
      for (let i = 0; i < contrat.produits.length; i++) {
        console.log(contrat.produits[i].nom);
        const prod = 'produits  ' + i + ': ' + contrat.produits[i].nom;
        doc.text(prod  , 20, 20);
      }
      const qtec = 'quantite commander  '  + ': ' + contrat.quantiteCommander;
        doc.text(qtec  , 30, 30);
        doc.save('a4.pdf');
    }
}
