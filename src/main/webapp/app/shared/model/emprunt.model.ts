import { Moment } from 'moment';
import { IFournisseur } from 'app/shared/model//fournisseur.model';
import { IClient } from 'app/shared/model//client.model';
import { IContrat } from 'app/shared/model//contrat.model';

export interface IEmprunt {
    id?: number;
    activated?: boolean;
    montant?: number;
    date?: Moment;
    pictureContentType?: string;
    picture?: any;
    fournisseurs?: IFournisseur[];
    clients?: IClient[];
    contrats?: IContrat[];
}

export class Emprunt implements IEmprunt {
    constructor(
        public id?: number,
        public activated?: boolean,
        public montant?: number,
        public date?: Moment,
        public pictureContentType?: string,
        public picture?: any,
        public fournisseurs?: IFournisseur[],
        public clients?: IClient[],
        public contrats?: IContrat[]
    ) {
        this.activated = false;
    }
}
