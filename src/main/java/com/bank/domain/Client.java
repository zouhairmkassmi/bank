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
 * A Client.
 */
@Entity
@Table(name = "client")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "tel")
    private Long tel;

    @Lob
    @Column(name = "picture")
    private byte[] picture;

    @Column(name = "picture_content_type")
    private String pictureContentType;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    @OneToMany(mappedBy = "client")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Compte> comptes = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "client_rating",
               joinColumns = @JoinColumn(name = "clients_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "ratings_id", referencedColumnName = "id"))
    private Set<Rating> ratings = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "client_adresse",
               joinColumns = @JoinColumn(name = "clients_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "adresses_id", referencedColumnName = "id"))
    private Set<Adresse> adresses = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "client_contrat",
               joinColumns = @JoinColumn(name = "clients_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "contrats_id", referencedColumnName = "id"))
    private Set<Contrat> contrats = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("clients")
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

    public Client nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Long getTel() {
        return tel;
    }

    public Client tel(Long tel) {
        this.tel = tel;
        return this;
    }

    public void setTel(Long tel) {
        this.tel = tel;
    }

    public byte[] getPicture() {
        return picture;
    }

    public Client picture(byte[] picture) {
        this.picture = picture;
        return this;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public String getPictureContentType() {
        return pictureContentType;
    }

    public Client pictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
        return this;
    }

    public void setPictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
    }

    public User getUser() {
        return user;
    }

    public Client user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Compte> getComptes() {
        return comptes;
    }

    public Client comptes(Set<Compte> comptes) {
        this.comptes = comptes;
        return this;
    }

    public Client addCompte(Compte compte) {
        this.comptes.add(compte);
        compte.setClient(this);
        return this;
    }

    public Client removeCompte(Compte compte) {
        this.comptes.remove(compte);
        compte.setClient(null);
        return this;
    }

    public void setComptes(Set<Compte> comptes) {
        this.comptes = comptes;
    }

    public Set<Rating> getRatings() {
        return ratings;
    }

    public Client ratings(Set<Rating> ratings) {
        this.ratings = ratings;
        return this;
    }

    public Client addRating(Rating rating) {
        this.ratings.add(rating);
        rating.getClients().add(this);
        return this;
    }

    public Client removeRating(Rating rating) {
        this.ratings.remove(rating);
        rating.getClients().remove(this);
        return this;
    }

    public void setRatings(Set<Rating> ratings) {
        this.ratings = ratings;
    }

    public Set<Adresse> getAdresses() {
        return adresses;
    }

    public Client adresses(Set<Adresse> adresses) {
        this.adresses = adresses;
        return this;
    }

    public Client addAdresse(Adresse adresse) {
        this.adresses.add(adresse);
        adresse.getClients().add(this);
        return this;
    }

    public Client removeAdresse(Adresse adresse) {
        this.adresses.remove(adresse);
        adresse.getClients().remove(this);
        return this;
    }

    public void setAdresses(Set<Adresse> adresses) {
        this.adresses = adresses;
    }

    public Set<Contrat> getContrats() {
        return contrats;
    }

    public Client contrats(Set<Contrat> contrats) {
        this.contrats = contrats;
        return this;
    }

    public Client addContrat(Contrat contrat) {
        this.contrats.add(contrat);
        contrat.getClients().add(this);
        return this;
    }

    public Client removeContrat(Contrat contrat) {
        this.contrats.remove(contrat);
        contrat.getClients().remove(this);
        return this;
    }

    public void setContrats(Set<Contrat> contrats) {
        this.contrats = contrats;
    }

    public Emprunt getEmprunt() {
        return emprunt;
    }

    public Client emprunt(Emprunt emprunt) {
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
        Client client = (Client) o;
        if (client.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), client.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Client{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", tel=" + getTel() +
            ", picture='" + getPicture() + "'" +
            ", pictureContentType='" + getPictureContentType() + "'" +
            "}";
    }
}
