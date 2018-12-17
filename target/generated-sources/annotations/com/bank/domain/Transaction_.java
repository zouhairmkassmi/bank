package com.bank.domain;

import java.time.Instant;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Transaction.class)
public abstract class Transaction_ {

	public static volatile SingularAttribute<Transaction, Instant> date;
	public static volatile SingularAttribute<Transaction, String> refT;
	public static volatile SetAttribute<Transaction, Compte> comptes;
	public static volatile SetAttribute<Transaction, Contrat> contrats;
	public static volatile SingularAttribute<Transaction, Long> montant;
	public static volatile SingularAttribute<Transaction, Long> id;

}

