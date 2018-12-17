package com.bank.domain;

import java.time.Instant;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Emprunt.class)
public abstract class Emprunt_ {

	public static volatile SingularAttribute<Emprunt, Instant> date;
	public static volatile SetAttribute<Emprunt, Client> clients;
	public static volatile SetAttribute<Emprunt, Contrat> contrats;
	public static volatile SingularAttribute<Emprunt, Long> montant;
	public static volatile SingularAttribute<Emprunt, Long> id;
	public static volatile SingularAttribute<Emprunt, String> pictureContentType;
	public static volatile SingularAttribute<Emprunt, byte[]> picture;
	public static volatile SetAttribute<Emprunt, Fournisseur> fournisseurs;
	public static volatile SingularAttribute<Emprunt, Boolean> activated;

}

