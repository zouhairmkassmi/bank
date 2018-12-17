package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Rating.class)
public abstract class Rating_ {

	public static volatile SetAttribute<Rating, Client> clients;
	public static volatile SingularAttribute<Rating, Long> id;
	public static volatile SingularAttribute<Rating, String> openion;
	public static volatile SingularAttribute<Rating, Long> value;
	public static volatile SetAttribute<Rating, Fournisseur> fournisseurs;

}

