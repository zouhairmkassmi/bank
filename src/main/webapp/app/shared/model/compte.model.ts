import { IClient } from 'app/shared/model//client.model';
import { IFournisseur } from 'app/shared/model//fournisseur.model';
import { ITransaction } from 'app/shared/model//transaction.model';

export interface ICompte {
    id?: number;
    adressSolidty?: string;
    client?: IClient;
    fournisseur?: IFournisseur;
    transaction?: ITransaction;
}

export class Compte implements ICompte {
    constructor(
        public id?: number,
        public adressSolidty?: string,
        public client?: IClient,
        public fournisseur?: IFournisseur,
        public transaction?: ITransaction
    ) {}
}
