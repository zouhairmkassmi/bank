import { IProduit } from 'app/shared/model//produit.model';
import { IEmprunt } from 'app/shared/model//emprunt.model';
import { ITransaction } from 'app/shared/model//transaction.model';
import { IFournisseur } from 'app/shared/model//fournisseur.model';
import { IClient } from 'app/shared/model//client.model';

export interface IContrat {
    id?: number;
    ref?: string;
    quantiteCommander?: number;
    produits?: IProduit[];
    emprunt?: IEmprunt;
    transactions?: ITransaction[];
    fournisseurs?: IFournisseur[];
    clients?: IClient[];
}

export class Contrat implements IContrat {
    constructor(
        public id?: number,
        public ref?: string,
        public quantiteCommander?: number,
        public produits?: IProduit[],
        public emprunt?: IEmprunt,
        public transactions?: ITransaction[],
        public fournisseurs?: IFournisseur[],
        public clients?: IClient[]
    ) {}
}
