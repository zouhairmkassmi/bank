package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Produit.class)
public abstract class Produit_ {

	public static volatile SingularAttribute<Produit, Long> quantiteDisponible;
	public static volatile SetAttribute<Produit, Contrat> contrats;
	public static volatile SetAttribute<Produit, Fournisseur> founisseurs;
	public static volatile SingularAttribute<Produit, Long> id;
	public static volatile SetAttribute<Produit, Categorie> categories;
	public static volatile SingularAttribute<Produit, String> nom;
	public static volatile SingularAttribute<Produit, String> pictureContentType;
	public static volatile SingularAttribute<Produit, byte[]> picture;

}

