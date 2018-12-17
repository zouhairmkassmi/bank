package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Compte.class)
public abstract class Compte_ {

	public static volatile SingularAttribute<Compte, String> adressSolidty;
	public static volatile SingularAttribute<Compte, Client> client;
	public static volatile SingularAttribute<Compte, Fournisseur> fournisseur;
	public static volatile SingularAttribute<Compte, Long> id;
	public static volatile SingularAttribute<Compte, Transaction> transaction;

}

