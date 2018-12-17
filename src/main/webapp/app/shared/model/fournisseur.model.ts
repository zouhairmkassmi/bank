import { IUser } from 'app/core/user/user.model';
import { ICompte } from 'app/shared/model//compte.model';
import { IProduit } from 'app/shared/model//produit.model';
import { ICategorie } from 'app/shared/model//categorie.model';
import { IAdresse } from 'app/shared/model//adresse.model';
import { IRating } from 'app/shared/model//rating.model';
import { IContrat } from 'app/shared/model//contrat.model';
import { IEmprunt } from 'app/shared/model//emprunt.model';

export interface IFournisseur {
    id?: number;
    nom?: string;
    tel?: number;
    fax?: number;
    mail?: string;
    logoContentType?: string;
    logo?: any;
    user?: IUser;
    comptes?: ICompte[];
    produits?: IProduit[];
    categories?: ICategorie[];
    adresses?: IAdresse[];
    ratings?: IRating[];
    contrats?: IContrat[];
    emprunt?: IEmprunt;
}

export class Fournisseur implements IFournisseur {
    constructor(
        public id?: number,
        public nom?: string,
        public tel?: number,
        public fax?: number,
        public mail?: string,
        public logoContentType?: string,
        public logo?: any,
        public user?: IUser,
        public comptes?: ICompte[],
        public produits?: IProduit[],
        public categories?: ICategorie[],
        public adresses?: IAdresse[],
        public ratings?: IRating[],
        public contrats?: IContrat[],
        public emprunt?: IEmprunt
    ) {}
}
