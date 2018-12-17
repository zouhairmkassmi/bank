import { ICategorie } from 'app/shared/model//categorie.model';
import { IFournisseur } from 'app/shared/model//fournisseur.model';
import { IContrat } from 'app/shared/model//contrat.model';

export interface IProduit {
    id?: number;
    nom?: string;
    quantiteDisponible?: number;
    pictureContentType?: string;
    picture?: any;
    categories?: ICategorie[];
    founisseurs?: IFournisseur[];
    contrats?: IContrat[];
}

export class Produit implements IProduit {
    constructor(
        public id?: number,
        public nom?: string,
        public quantiteDisponible?: number,
        public pictureContentType?: string,
        public picture?: any,
        public categories?: ICategorie[],
        public founisseurs?: IFournisseur[],
        public contrats?: IContrat[]
    ) {}
}
