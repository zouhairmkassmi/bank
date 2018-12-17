package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Categorie.class)
public abstract class Categorie_ {

	public static volatile SetAttribute<Categorie, Produit> produits;
	public static volatile SingularAttribute<Categorie, Long> id;
	public static volatile SingularAttribute<Categorie, String> nom;
	public static volatile SetAttribute<Categorie, Fournisseur> fournisseurs;

}

