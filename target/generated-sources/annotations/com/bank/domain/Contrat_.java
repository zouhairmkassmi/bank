package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Contrat.class)
public abstract class Contrat_ {

	public static volatile SetAttribute<Contrat, Produit> produits;
	public static volatile SingularAttribute<Contrat, String> ref;
	public static volatile SetAttribute<Contrat, Client> clients;
	public static volatile SingularAttribute<Contrat, Emprunt> emprunt;
	public static volatile SingularAttribute<Contrat, Long> quantiteCommander;
	public static volatile SingularAttribute<Contrat, Long> id;
	public static volatile SetAttribute<Contrat, Transaction> transactions;
	public static volatile SetAttribute<Contrat, Fournisseur> fournisseurs;

}

