import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BankClientModule } from './client/client.module';
import { BankCompteModule } from './compte/compte.module';
import { BankCategorieModule } from './categorie/categorie.module';
import { BankFournisseurModule } from './fournisseur/fournisseur.module';
import { BankProduitModule } from './produit/produit.module';
import { BankEmpruntModule } from './emprunt/emprunt.module';
import { BankRatingModule } from './rating/rating.module';
import { BankTransactionModule } from './transaction/transaction.module';
import { BankAdresseModule } from './adresse/adresse.module';
import { BankContratModule } from './contrat/contrat.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BankClientModule,
        BankCompteModule,
        BankCategorieModule,
        BankFournisseurModule,
        BankProduitModule,
        BankEmpruntModule,
        BankRatingModule,
        BankTransactionModule,
        BankAdresseModule,
        BankContratModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BankEntityModule {}
