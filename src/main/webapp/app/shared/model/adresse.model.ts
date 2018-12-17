import { IFournisseur } from 'app/shared/model//fournisseur.model';
import { IClient } from 'app/shared/model//client.model';

export interface IAdresse {
    id?: number;
    pays?: string;
    region?: string;
    ville?: string;
    rue?: string;
    codePostal?: number;
    founisseurs?: IFournisseur[];
    clients?: IClient[];
}

export class Adresse implements IAdresse {
    constructor(
        public id?: number,
        public pays?: string,
        public region?: string,
        public ville?: string,
        public rue?: string,
        public codePostal?: number,
        public founisseurs?: IFournisseur[],
        public clients?: IClient[]
    ) {}
}
