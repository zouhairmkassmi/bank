import { Moment } from 'moment';
import { ICompte } from 'app/shared/model//compte.model';
import { IContrat } from 'app/shared/model//contrat.model';

export interface ITransaction {
    id?: number;
    refT?: string;
    montant?: number;
    date?: Moment;
    comptes?: ICompte[];
    contrats?: IContrat[];
}

export class Transaction implements ITransaction {
    constructor(
        public id?: number,
        public refT?: string,
        public montant?: number,
        public date?: Moment,
        public comptes?: ICompte[],
        public contrats?: IContrat[]
    ) {}
}
