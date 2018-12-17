import { IProduit } from 'app/shared/model//produit.model';
import { IFournisseur } from 'app/shared/model//fournisseur.model';

export interface ICategorie {
    id?: number;
    nom?: string;
    produits?: IProduit[];
    fournisseurs?: IFournisseur[];
}

export class Categorie implements ICategorie {
    constructor(public id?: number, public nom?: string, public produits?: IProduit[], public fournisseurs?: IFournisseur[]) {}
}
