package com.bank.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Produit.
 */
@Entity
@Table(name = "produit")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Produit implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "quantite_disponible")
    private Long quantiteDisponible;

    @Lob
    @Column(name = "picture")
    private byte[] picture;

    @Column(name = "picture_content_type")
    private String pictureContentType;

    @ManyToMany(mappedBy = "produits")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Categorie> categories = new HashSet<>();

    @ManyToMany(mappedBy = "produits")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Fournisseur> founisseurs = new HashSet<>();

    @ManyToMany(mappedBy = "produits")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Contrat> contrats = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Produit nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Long getQuantiteDisponible() {
        return quantiteDisponible;
    }

    public Produit quantiteDisponible(Long quantiteDisponible) {
        this.quantiteDisponible = quantiteDisponible;
        return this;
    }

    public void setQuantiteDisponible(Long quantiteDisponible) {
        this.quantiteDisponible = quantiteDisponible;
    }

    public byte[] getPicture() {
        return picture;
    }

    public Produit picture(byte[] picture) {
        this.picture = picture;
        return this;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public String getPictureContentType() {
        return pictureContentType;
    }

    public Produit pictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
        return this;
    }

    public void setPictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
    }

    public Set<Categorie> getCategories() {
        return categories;
    }

    public Produit categories(Set<Categorie> categories) {
        this.categories = categories;
        return this;
    }

    public Produit addCategorie(Categorie categorie) {
        this.categories.add(categorie);
        categorie.getProduits().add(this);
        return this;
    }

    public Produit removeCategorie(Categorie categorie) {
        this.categories.remove(categorie);
        categorie.getProduits().remove(this);
        return this;
    }

    public void setCategories(Set<Categorie> categories) {
        this.categories = categories;
    }

    public Set<Fournisseur> getFounisseurs() {
        return founisseurs;
    }

    public Produit founisseurs(Set<Fournisseur> fournisseurs) {
        this.founisseurs = fournisseurs;
        return this;
    }

    public Produit addFounisseur(Fournisseur fournisseur) {
        this.founisseurs.add(fournisseur);
        fournisseur.getProduits().add(this);
        return this;
    }

    public Produit removeFounisseur(Fournisseur fournisseur) {
        this.founisseurs.remove(fournisseur);
        fournisseur.getProduits().remove(this);
        return this;
    }

    public void setFounisseurs(Set<Fournisseur> fournisseurs) {
        this.founisseurs = fournisseurs;
    }

    public Set<Contrat> getContrats() {
        return contrats;
    }

    public Produit contrats(Set<Contrat> contrats) {
        this.contrats = contrats;
        return this;
    }

    public Produit addContrat(Contrat contrat) {
        this.contrats.add(contrat);
        contrat.getProduits().add(this);
        return this;
    }

    public Produit removeContrat(Contrat contrat) {
        this.contrats.remove(contrat);
        contrat.getProduits().remove(this);
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
        Produit produit = (Produit) o;
        if (produit.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), produit.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Produit{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", quantiteDisponible=" + getQuantiteDisponible() +
            ", picture='" + getPicture() + "'" +
            ", pictureContentType='" + getPictureContentType() + "'" +
            "}";
    }
}
