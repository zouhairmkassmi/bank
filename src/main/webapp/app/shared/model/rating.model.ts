import { IClient } from 'app/shared/model//client.model';
import { IFournisseur } from 'app/shared/model//fournisseur.model';

export interface IRating {
    id?: number;
    value?: number;
    openion?: string;
    clients?: IClient[];
    fournisseurs?: IFournisseur[];
}

export class Rating implements IRating {
    constructor(
        public id?: number,
        public value?: number,
        public openion?: string,
        public clients?: IClient[],
        public fournisseurs?: IFournisseur[]
    ) {}
}
