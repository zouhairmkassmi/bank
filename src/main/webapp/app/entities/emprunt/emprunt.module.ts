import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BankSharedModule } from 'app/shared';
import {
    EmpruntComponent,
    EmpruntDetailComponent,
    EmpruntUpdateComponent,
    EmpruntDeletePopupComponent,
    EmpruntDeleteDialogComponent,
    empruntRoute,
    empruntPopupRoute
} from './';

const ENTITY_STATES = [...empruntRoute, ...empruntPopupRoute];

@NgModule({
    imports: [BankSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EmpruntComponent,
        EmpruntDetailComponent,
        EmpruntUpdateComponent,
        EmpruntDeleteDialogComponent,
        EmpruntDeletePopupComponent
    ],
    entryComponents: [EmpruntComponent, EmpruntUpdateComponent, EmpruntDeleteDialogComponent, EmpruntDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BankEmpruntModule {}
