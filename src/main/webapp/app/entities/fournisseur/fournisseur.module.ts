import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BankSharedModule } from 'app/shared';
import { BankAdminModule } from 'app/admin/admin.module';
import {
    FournisseurComponent,
    FournisseurDetailComponent,
    FournisseurUpdateComponent,
    FournisseurDeletePopupComponent,
    FournisseurDeleteDialogComponent,
    fournisseurRoute,
    fournisseurPopupRoute
} from './';

const ENTITY_STATES = [...fournisseurRoute, ...fournisseurPopupRoute];

@NgModule({
    imports: [BankSharedModule, BankAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FournisseurComponent,
        FournisseurDetailComponent,
        FournisseurUpdateComponent,
        FournisseurDeleteDialogComponent,
        FournisseurDeletePopupComponent
    ],
    entryComponents: [FournisseurComponent, FournisseurUpdateComponent, FournisseurDeleteDialogComponent, FournisseurDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BankFournisseurModule {}
