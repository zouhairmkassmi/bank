import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiDataUtils, JhiAlertService, JhiParseLinks } from 'ng-jhipster';

import { LoginModalService, Principal, Account } from 'app/core';
import { FournisseurService } from 'app/entities/fournisseur';
import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    public sliders: Array<any> = [];
    public fournisseurs: IFournisseur[];
    eventSubscriber: Subscription;
    itemsPerPage: number;
    links: any;
    page: any;
    predicate: any;
    queryCount: any;
    reverse: any;
    totalItems: number;
    // tslint:disable-next-line:max-line-length
    constructor(private fournisseurService: FournisseurService , private principal: Principal,
        private dataUtils: JhiDataUtils,
         private loginModalService: LoginModalService,
         private jhiAlertService: JhiAlertService,
         private parseLinks: JhiParseLinks , private eventManager: JhiEventManager) {
        this.sliders.push(
            {
                imagePath: '../content/images/bank.png',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: '../content/images/bank2.jpeg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: '../content/images/bank3.jpeg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
        this.fournisseurs = [];
        this.itemsPerPage = 20;
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = true;
    }

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
            this.loadAll();
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
    loadAll() {
        this.fournisseurService
            .query({
                page: this.page,
                size: this.itemsPerPage,
                sort: this.sort()
            })
            .subscribe(
                (res: HttpResponse<IFournisseur[]>) => this.paginatePieces(res.body, res.headers),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }
    reset() {
        this.page = 0;
        this.fournisseurs = [];
        this.loadAll();
    }

    loadPage(page) {
        this.page = page;
        this.loadAll();
    }

    trackId(index: number, item: IFournisseur) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    private paginatePieces(data: IFournisseur[], headers: HttpHeaders) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        for (let i = 0; i < data.length; i++) {
            this.fournisseurs.push(data[i]);
        }
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
