import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Categorie } from 'app/shared/model/categorie.model';
import { CategorieService } from './categorie.service';
import { CategorieComponent } from './categorie.component';
import { CategorieDetailComponent } from './categorie-detail.component';
import { CategorieUpdateComponent } from './categorie-update.component';
import { CategorieDeletePopupComponent } from './categorie-delete-dialog.component';
import { ICategorie } from 'app/shared/model/categorie.model';

@Injectable({ providedIn: 'root' })
export class CategorieResolve implements Resolve<ICategorie> {
    constructor(private service: CategorieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((categorie: HttpResponse<Categorie>) => categorie.body);
        }
        return Observable.of(new Categorie());
    }
}

export const categorieRoute: Routes = [
    {
        path: 'categorie',
        component: CategorieComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'bankApp.categorie.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'categorie/:id/view',
        component: CategorieDetailComponent,
        resolve: {
            categorie: CategorieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.categorie.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'categorie/new',
        component: CategorieUpdateComponent,
        resolve: {
            categorie: CategorieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.categorie.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'categorie/:id/edit',
        component: CategorieUpdateComponent,
        resolve: {
            categorie: CategorieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.categorie.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const categoriePopupRoute: Routes = [
    {
        path: 'categorie/:id/delete',
        component: CategorieDeletePopupComponent,
        resolve: {
            categorie: CategorieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.categorie.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
