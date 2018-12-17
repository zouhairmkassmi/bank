package com.bank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Client.class)
public abstract class Client_ {

	public static volatile SetAttribute<Client, Compte> comptes;
	public static volatile SingularAttribute<Client, Emprunt> emprunt;
	public static volatile SetAttribute<Client, Contrat> contrats;
	public static volatile SetAttribute<Client, Rating> ratings;
	public static volatile SingularAttribute<Client, Long> tel;
	public static volatile SetAttribute<Client, Adresse> adresses;
	public static volatile SingularAttribute<Client, Long> id;
	public static volatile SingularAttribute<Client, String> nom;
	public static volatile SingularAttribute<Client, String> pictureContentType;
	public static volatile SingularAttribute<Client, User> user;
	public static volatile SingularAttribute<Client, byte[]> picture;

}

