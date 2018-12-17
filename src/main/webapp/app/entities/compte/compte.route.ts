import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Compte } from 'app/shared/model/compte.model';
import { CompteService } from './compte.service';
import { CompteComponent } from './compte.component';
import { CompteDetailComponent } from './compte-detail.component';
import { CompteUpdateComponent } from './compte-update.component';
import { CompteDeletePopupComponent } from './compte-delete-dialog.component';
import { ICompte } from 'app/shared/model/compte.model';

@Injectable({ providedIn: 'root' })
export class CompteResolve implements Resolve<ICompte> {
    constructor(private service: CompteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((compte: HttpResponse<Compte>) => compte.body);
        }
        return Observable.of(new Compte());
    }
}

export const compteRoute: Routes = [
    {
        path: 'compte',
        component: CompteComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'bankApp.compte.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'compte/:id/view',
        component: CompteDetailComponent,
        resolve: {
            compte: CompteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.compte.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'compte/new',
        component: CompteUpdateComponent,
        resolve: {
            compte: CompteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.compte.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'compte/:id/edit',
        component: CompteUpdateComponent,
        resolve: {
            compte: CompteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.compte.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const comptePopupRoute: Routes = [
    {
        path: 'compte/:id/delete',
        component: CompteDeletePopupComponent,
        resolve: {
            compte: CompteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.compte.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
