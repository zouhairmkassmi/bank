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
 * A Fournisseur.
 */
@Entity
@Table(name = "fournisseur")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Fournisseur implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "tel")
    private Long tel;

    @Column(name = "fax")
    private Long fax;

    @Column(name = "mail")
    private String mail;

    @Lob
    @Column(name = "logo")
    private byte[] logo;

    @Column(name = "logo_content_type")
    private String logoContentType;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    @OneToMany(mappedBy = "fournisseur")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Compte> comptes = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "fournisseur_produit",
               joinColumns = @JoinColumn(name = "fournisseurs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "produits_id", referencedColumnName = "id"))
    private Set<Produit> produits = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "fournisseur_categorie",
               joinColumns = @JoinColumn(name = "fournisseurs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "categories_id", referencedColumnName = "id"))
    private Set<Categorie> categories = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "fournisseur_adresse",
               joinColumns = @JoinColumn(name = "fournisseurs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "adresses_id", referencedColumnName = "id"))
    private Set<Adresse> adresses = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "fournisseur_rating",
               joinColumns = @JoinColumn(name = "fournisseurs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "ratings_id", referencedColumnName = "id"))
    private Set<Rating> ratings = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "fournisseur_contrat",
               joinColumns = @JoinColumn(name = "fournisseurs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "contrats_id", referencedColumnName = "id"))
    private Set<Contrat> contrats = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("fournisseurs")
    private Emprunt emprunt;

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

    public Fournisseur nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Long getTel() {
        return tel;
    }

    public Fournisseur tel(Long tel) {
        this.tel = tel;
        return this;
    }

    public void setTel(Long tel) {
        this.tel = tel;
    }

    public Long getFax() {
        return fax;
    }

    public Fournisseur fax(Long fax) {
        this.fax = fax;
        return this;
    }

    public void setFax(Long fax) {
        this.fax = fax;
    }

    public String getMail() {
        return mail;
    }

    public Fournisseur mail(String mail) {
        this.mail = mail;
        return this;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public byte[] getLogo() {
        return logo;
    }

    public Fournisseur logo(byte[] logo) {
        this.logo = logo;
        return this;
    }

    public void setLogo(byte[] logo) {
        this.logo = logo;
    }

    public String getLogoContentType() {
        return logoContentType;
    }

    public Fournisseur logoContentType(String logoContentType) {
        this.logoContentType = logoContentType;
        return this;
    }

    public void setLogoContentType(String logoContentType) {
        this.logoContentType = logoContentType;
    }

    public User getUser() {
        return user;
    }

    public Fournisseur user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Compte> getComptes() {
        return comptes;
    }

    public Fournisseur comptes(Set<Compte> comptes) {
        this.comptes = comptes;
        return this;
    }

    public Fournisseur addCompte(Compte compte) {
        this.comptes.add(compte);
        compte.setFournisseur(this);
        return this;
    }

    public Fournisseur removeCompte(Compte compte) {
        this.comptes.remove(compte);
        compte.setFournisseur(null);
        return this;
    }

    public void setComptes(Set<Compte> comptes) {
        this.comptes = comptes;
    }

    public Set<Produit> getProduits() {
        return produits;
    }

    public Fournisseur produits(Set<Produit> produits) {
        this.produits = produits;
        return this;
    }

    public Fournisseur addProduit(Produit produit) {
        this.produits.add(produit);
        produit.getFounisseurs().add(this);
        return this;
    }

    public Fournisseur removeProduit(Produit produit) {
        this.produits.remove(produit);
        produit.getFounisseurs().remove(this);
        return this;
    }

    public void setProduits(Set<Produit> produits) {
        this.produits = produits;
    }

    public Set<Categorie> getCategories() {
        return categories;
    }

    public Fournisseur categories(Set<Categorie> categories) {
        this.categories = categories;
        return this;
    }

    public Fournisseur addCategorie(Categorie categorie) {
        this.categories.add(categorie);
        categorie.getFournisseurs().add(this);
        return this;
    }

    public Fournisseur removeCategorie(Categorie categorie) {
        this.categories.remove(categorie);
        categorie.getFournisseurs().remove(this);
        return this;
    }

    public void setCategories(Set<Categorie> categories) {
        this.categories = categories;
    }

    public Set<Adresse> getAdresses() {
        return adresses;
    }

    public Fournisseur adresses(Set<Adresse> adresses) {
        this.adresses = adresses;
        return this;
    }

    public Fournisseur addAdresse(Adresse adresse) {
        this.adresses.add(adresse);
        adresse.getFounisseurs().add(this);
        return this;
    }

    public Fournisseur removeAdresse(Adresse adresse) {
        this.adresses.remove(adresse);
        adresse.getFounisseurs().remove(this);
        return this;
    }

    public void setAdresses(Set<Adresse> adresses) {
        this.adresses = adresses;
    }

    public Set<Rating> getRatings() {
        return ratings;
    }

    public Fournisseur ratings(Set<Rating> ratings) {
        this.ratings = ratings;
        return this;
    }

    public Fournisseur addRating(Rating rating) {
        this.ratings.add(rating);
        rating.getFournisseurs().add(this);
        return this;
    }

    public Fournisseur removeRating(Rating rating) {
        this.ratings.remove(rating);
        rating.getFournisseurs().remove(this);
        return this;
    }

    public void setRatings(Set<Rating> ratings) {
        this.ratings = ratings;
    }

    public Set<Contrat> getContrats() {
        return contrats;
    }

    public Fournisseur contrats(Set<Contrat> contrats) {
        this.contrats = contrats;
        return this;
    }

    public Fournisseur addContrat(Contrat contrat) {
        this.contrats.add(contrat);
        contrat.getFournisseurs().add(this);
        return this;
    }

    public Fournisseur removeContrat(Contrat contrat) {
        this.contrats.remove(contrat);
        contrat.getFournisseurs().remove(this);
        return this;
    }

    public void setContrats(Set<Contrat> contrats) {
        this.contrats = contrats;
    }

    public Emprunt getEmprunt() {
        return emprunt;
    }

    public Fournisseur emprunt(Emprunt emprunt) {
        this.emprunt = emprunt;
        return this;
    }

    public void setEmprunt(Emprunt emprunt) {
        this.emprunt = emprunt;
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
        Fournisseur fournisseur = (Fournisseur) o;
        if (fournisseur.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), fournisseur.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Fournisseur{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", tel=" + getTel() +
            ", fax=" + getFax() +
            ", mail='" + getMail() + "'" +
            ", logo='" + getLogo() + "'" +
            ", logoContentType='" + getLogoContentType() + "'" +
            "}";
    }
}
