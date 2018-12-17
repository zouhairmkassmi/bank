import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Emprunt } from 'app/shared/model/emprunt.model';
import { EmpruntService } from './emprunt.service';
import { EmpruntComponent } from './emprunt.component';
import { EmpruntDetailComponent } from './emprunt-detail.component';
import { EmpruntUpdateComponent } from './emprunt-update.component';
import { EmpruntDeletePopupComponent } from './emprunt-delete-dialog.component';
import { IEmprunt } from 'app/shared/model/emprunt.model';

@Injectable({ providedIn: 'root' })
export class EmpruntResolve implements Resolve<IEmprunt> {
    constructor(private service: EmpruntService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((emprunt: HttpResponse<Emprunt>) => emprunt.body);
        }
        return Observable.of(new Emprunt());
    }
}

export const empruntRoute: Routes = [
    {
        path: 'emprunt',
        component: EmpruntComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.emprunt.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'emprunt/:id/view',
        component: EmpruntDetailComponent,
        resolve: {
            emprunt: EmpruntResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.emprunt.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'emprunt/new',
        component: EmpruntUpdateComponent,
        resolve: {
            emprunt: EmpruntResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.emprunt.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'emprunt/:id/edit',
        component: EmpruntUpdateComponent,
        resolve: {
            emprunt: EmpruntResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.emprunt.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const empruntPopupRoute: Routes = [
    {
        path: 'emprunt/:id/delete',
        component: EmpruntDeletePopupComponent,
        resolve: {
            emprunt: EmpruntResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'bankApp.emprunt.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
