package com.bank.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Transaction.
 */
@Entity
@Table(name = "transaction")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Transaction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ref_t")
    private String refT;

    @Column(name = "montant")
    private Long montant;

    @Column(name = "jhi_date")
    private Instant date;

    @OneToMany(mappedBy = "transaction")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Compte> comptes = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "transaction_contrat",
               joinColumns = @JoinColumn(name = "transactions_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "contrats_id", referencedColumnName = "id"))
    private Set<Contrat> contrats = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRefT() {
        return refT;
    }

    public Transaction refT(String refT) {
        this.refT = refT;
        return this;
    }

    public void setRefT(String refT) {
        this.refT = refT;
    }

    public Long getMontant() {
        return montant;
    }

    public Transaction montant(Long montant) {
        this.montant = montant;
        return this;
    }

    public void setMontant(Long montant) {
        this.montant = montant;
    }

    public Instant getDate() {
        return date;
    }

    public Transaction date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Set<Compte> getComptes() {
        return comptes;
    }

    public Transaction comptes(Set<Compte> comptes) {
        this.comptes = comptes;
        return this;
    }

    public Transaction addCompte(Compte compte) {
        this.comptes.add(compte);
        compte.setTransaction(this);
        return this;
    }

    public Transaction removeCompte(Compte compte) {
        this.comptes.remove(compte);
        compte.setTransaction(null);
        return this;
    }

    public void setComptes(Set<Compte> comptes) {
        this.comptes = comptes;
    }

    public Set<Contrat> getContrats() {
        return contrats;
    }

    public Transaction contrats(Set<Contrat> contrats) {
        this.contrats = contrats;
        return this;
    }

    public Transaction addContrat(Contrat contrat) {
        this.contrats.add(contrat);
        contrat.getTransactions().add(this);
        return this;
    }

    public Transaction removeContrat(Contrat contrat) {
        this.contrats.remove(contrat);
        contrat.getTransactions().remove(this);
        return this;
    }

    public void setContrats(Set<Contrat> contrats) {
        this.contrats = contrats;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Transaction transaction = (Transaction) o;
        if (transaction.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), transaction.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Transaction{" +
            "id=" + getId() +
            ", refT='" + getRefT() + "'" +
            ", montant=" + getMontant() +
            ", date='" + getDate() + "'" +
            "}";
    }
}
