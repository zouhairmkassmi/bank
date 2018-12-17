package com.bank.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Contrat.
 */
@Entity
@Table(name = "contrat")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Contrat implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "jhi_ref")
    private String ref;

    @Column(name = "quantite_commander")
    private Long quantiteCommander;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "contrat_produit",
               joinColumns = @JoinColumn(name = "contrats_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "produits_id", referencedColumnName = "id"))
    private Set<Produit> produits = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("contrats")
    private Emprunt emprunt;

    @ManyToMany(mappedBy = "contrats")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Transaction> transactions = new HashSet<>();

    @ManyToMany(mappedBy = "contrats")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Fournisseur> fournisseurs = new HashSet<>();

    @ManyToMany(mappedBy = "contrats")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Client> clients = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRef() {
        return ref;
    }

    public Contrat ref(String ref) {
        this.ref = ref;
        return this;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public Long getQuantiteCommander() {
        return quantiteCommander;
    }

    public Contrat quantiteCommander(Long quantiteCommander) {
        this.quantiteCommander = quantiteCommander;
        return this;
    }

    public void setQuantiteCommander(Long quantiteCommander) {
        this.quantiteCommander = quantiteCommander;
    }

    public Set<Produit> getProduits() {
        return produits;
    }

    public Contrat produits(Set<Produit> produits) {
        this.produits = produits;
        return this;
    }

    public Contrat addProduit(Produit produit) {
        this.produits.add(produit);
        produit.getContrats().add(this);
        return this;
    }

    public Contrat removeProduit(Produit produit) {
        this.produits.remove(produit);
        produit.getContrats().remove(this);
        return this;
    }

    public void setProduits(Set<Produit> produits) {
        this.produits = produits;
    }

    public Emprunt getEmprunt() {
        return emprunt;
    }

    public Contrat emprunt(Emprunt emprunt) {
        this.emprunt = emprunt;
        return this;
    }

    public void setEmprunt(Emprunt emprunt) {
        this.emprunt = emprunt;
    }

    public Set<Transaction> getTransactions() {
        return transactions;
    }

    public Contrat transactions(Set<Transaction> transactions) {
        this.transactions = transactions;
        return this;
    }

    public Contrat addTransaction(Transaction transaction) {
        this.transactions.add(transaction);
        transaction.getContrats().add(this);
        return this;
    }

    public Contrat removeTransaction(Transaction transaction) {
        this.transactions.remove(transaction);
        transaction.getContrats().remove(this);
        return this;
    }

    public void setTransactions(Set<Transaction> transactions) {
        this.transactions = transactions;
    }

    public Set<Fournisseur> getFournisseurs() {
        return fournisseurs;
    }

    public Contrat fournisseurs(Set<Fournisseur> fournisseurs) {
        this.fournisseurs = fournisseurs;
        return this;
    }

    public Contrat addFournisseur(Fournisseur fournisseur) {
        this.fournisseurs.add(fournisseur);
        fournisseur.getContrats().add(this);
        return this;
    }

    public Contrat removeFournisseur(Fournisseur fournisseur) {
        this.fournisseurs.remove(fournisseur);
        fournisseur.getContrats().remove(this);
        return this;
    }

    public void setFournisseurs(Set<Fournisseur> fournisseurs) {
        this.fournisseurs = fournisseurs;
    }

    public Set<Client> getClients() {
        return clients;
    }

    public Contrat clients(Set<Client> clients) {
        this.clients = clients;
        return this;
    }

    public Contrat addClient(Client client) {
        this.clients.add(client);
        client.getContrats().add(this);
        return this;
    }

    public Contrat removeClient(Client client) {
        this.clients.remove(client);
        client.getContrats().remove(this);
        return this;
    }

    public void setClients(Set<Client> clients) {
        this.clients = clients;
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
        Contrat contrat = (Contrat) o;
        if (contrat.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), contrat.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Contrat{" +
            "id=" + getId() +
            ", ref='" + getRef() + "'" +
            ", quantiteCommander=" + getQuantiteCommander() +
            "}";
    }
}
