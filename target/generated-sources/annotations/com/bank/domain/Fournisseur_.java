package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Fournisseur.class)
public abstract class Fournisseur_ {

	public static volatile SetAttribute<Fournisseur, Produit> produits;
	public static volatile SingularAttribute<Fournisseur, String> mail;
	public static volatile SingularAttribute<Fournisseur, Emprunt> emprunt;
	public static volatile SetAttribute<Fournisseur, Adresse> adresses;
	public static volatile SingularAttribute<Fournisseur, String> nom;
	public static volatile SetAttribute<Fournisseur, Compte> comptes;
	public static volatile SetAttribute<Fournisseur, Contrat> contrats;
	public static volatile SetAttribute<Fournisseur, Rating> ratings;
	public static volatile SingularAttribute<Fournisseur, byte[]> logo;
	public static volatile SingularAttribute<Fournisseur, String> logoContentType;
	public static volatile SingularAttribute<Fournisseur, Long> tel;
	public static volatile SingularAttribute<Fournisseur, Long> id;
	public static volatile SetAttribute<Fournisseur, Categorie> categories;
	public static volatile SingularAttribute<Fournisseur, Long> fax;
	public static volatile SingularAttribute<Fournisseur, User> user;

}

