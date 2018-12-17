import { IUser } from 'app/core/user/user.model';
import { ICompte } from 'app/shared/model//compte.model';
import { IRating } from 'app/shared/model//rating.model';
import { IAdresse } from 'app/shared/model//adresse.model';
import { IContrat } from 'app/shared/model//contrat.model';
import { IEmprunt } from 'app/shared/model//emprunt.model';

export interface IClient {
    id?: number;
    nom?: string;
    tel?: number;
    pictureContentType?: string;
    picture?: any;
    user?: IUser;
    comptes?: ICompte[];
    ratings?: IRating[];
    adresses?: IAdresse[];
    contrats?: IContrat[];
    emprunt?: IEmprunt;
}

export class Client implements IClient {
    constructor(
        public id?: number,
        public nom?: string,
        public tel?: number,
        public pictureContentType?: string,
        public picture?: any,
        public user?: IUser,
        public comptes?: ICompte[],
        public ratings?: IRating[],
        public adresses?: IAdresse[],
        public contrats?: IContrat[],
        public emprunt?: IEmprunt
    ) {}
}
