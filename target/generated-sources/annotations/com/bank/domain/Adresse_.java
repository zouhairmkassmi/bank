package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Adresse.class)
public abstract class Adresse_ {

	public static volatile SingularAttribute<Adresse, String> ville;
	public static volatile SingularAttribute<Adresse, String> rue;
	public static volatile SetAttribute<Adresse, Client> clients;
	public static volatile SetAttribute<Adresse, Fournisseur> founisseurs;
	public static volatile SingularAttribute<Adresse, Long> id;
	public static volatile SingularAttribute<Adresse, Long> codePostal;
	public static volatile SingularAttribute<Adresse, String> region;
	public static volatile SingularAttribute<Adresse, String> pays;

}

