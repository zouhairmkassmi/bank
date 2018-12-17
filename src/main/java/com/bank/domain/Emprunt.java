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
 * A Emprunt.
 */
@Entity
@Table(name = "emprunt")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Emprunt implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "activated")
    private Boolean activated;

    @Column(name = "montant")
    private Long montant;

    @Column(name = "jhi_date")
    private Instant date;

    @Lob
    @Column(name = "picture")
    private byte[] picture;

    @Column(name = "picture_content_type")
    private String pictureContentType;

    @OneToMany(mappedBy = "emprunt")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Fournisseur> fournisseurs = new HashSet<>();

    @OneToMany(mappedBy = "emprunt")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Client> clients = new HashSet<>();

    @OneToMany(mappedBy = "emprunt")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Contrat> contrats = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isActivated() {
        return activated;
    }

    public Emprunt activated(Boolean activated) {
        this.activated = activated;
        return this;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public Long getMontant() {
        return montant;
    }

    public Emprunt montant(Long montant) {
        this.montant = montant;
        return this;
    }

    public void setMontant(Long montant) {
        this.montant = montant;
    }

    public Instant getDate() {
        return date;
    }

    public Emprunt date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public byte[] getPicture() {
        return picture;
    }

    public Emprunt picture(byte[] picture) {
        this.picture = picture;
        return this;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public String getPictureContentType() {
        return pictureContentType;
    }

    public Emprunt pictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
        return this;
    }

    public void setPictureContentType(String pictureContentType) {
        this.pictureContentType = pictureContentType;
    }

    public Set<Fournisseur> getFournisseurs() {
        return fournisseurs;
    }

    public Emprunt fournisseurs(Set<Fournisseur> fournisseurs) {
        this.fournisseurs = fournisseurs;
        return this;
    }

    public Emprunt addFournisseur(Fournisseur fournisseur) {
        this.fournisseurs.add(fournisseur);
        fournisseur.setEmprunt(this);
        return this;
    }

    public Emprunt removeFournisseur(Fournisseur fournisseur) {
        this.fournisseurs.remove(fournisseur);
        fournisseur.setEmprunt(null);
        return this;
    }

    public void setFournisseurs(Set<Fournisseur> fournisseurs) {
        this.fournisseurs = fournisseurs;
    }

    public Set<Client> getClients() {
        return clients;
    }

    public Emprunt clients(Set<Client> clients) {
        this.clients = clients;
        return this;
    }

    public Emprunt addClient(Client client) {
        this.clients.add(client);
        client.setEmprunt(this);
        return this;
    }

    public Emprunt removeClient(Client client) {
        this.clients.remove(client);
        client.setEmprunt(null);
        return this;
    }

    public void setClients(Set<Client> clients) {
        this.clients = clients;
    }

    public Set<Contrat> getContrats() {
        return contrats;
    }

    public Emprunt contrats(Set<Contrat> contrats) {
        this.contrats = contrats;
        return this;
    }

    public Emprunt addContrat(Contrat contrat) {
        this.contrats.add(contrat);
        contrat.setEmprunt(this);
        return this;
    }

    public Emprunt removeContrat(Contrat contrat) {
        this.contrats.remove(contrat);
        contrat.setEmprunt(null);
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
        Emprunt emprunt = (Emprunt) o;
        if (emprunt.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), emprunt.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Emprunt{" +
            "id=" + getId() +
            ", activated='" + isActivated() + "'" +
            ", montant=" + getMontant() +
            ", date='" + getDate() + "'" +
            ", picture='" + getPicture() + "'" +
            ", pictureContentType='" + getPictureContentType() + "'" +
            "}";
    }
}
