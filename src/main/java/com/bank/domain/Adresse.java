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
 * A Adresse.
 */
@Entity
@Table(name = "adresse")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Adresse implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pays")
    private String pays;

    @Column(name = "region")
    private String region;

    @Column(name = "ville")
    private String ville;

    @Column(name = "rue")
    private String rue;

    @Column(name = "code_postal")
    private Long codePostal;

    @ManyToMany(mappedBy = "adresses")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Fournisseur> founisseurs = new HashSet<>();

    @ManyToMany(mappedBy = "adresses")
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

    public String getPays() {
        return pays;
    }

    public Adresse pays(String pays) {
        this.pays = pays;
        return this;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getRegion() {
        return region;
    }

    public Adresse region(String region) {
        this.region = region;
        return this;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getVille() {
        return ville;
    }

    public Adresse ville(String ville) {
        this.ville = ville;
        return this;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getRue() {
        return rue;
    }

    public Adresse rue(String rue) {
        this.rue = rue;
        return this;
    }

    public void setRue(String rue) {
        this.rue = rue;
    }

    public Long getCodePostal() {
        return codePostal;
    }

    public Adresse codePostal(Long codePostal) {
        this.codePostal = codePostal;
        return this;
    }

    public void setCodePostal(Long codePostal) {
        this.codePostal = codePostal;
    }

    public Set<Fournisseur> getFounisseurs() {
        return founisseurs;
    }

    public Adresse founisseurs(Set<Fournisseur> fournisseurs) {
        this.founisseurs = fournisseurs;
        return this;
    }

    public Adresse addFounisseur(Fournisseur fournisseur) {
        this.founisseurs.add(fournisseur);
        fournisseur.getAdresses().add(this);
        return this;
    }

    public Adresse removeFounisseur(Fournisseur fournisseur) {
        this.founisseurs.remove(fournisseur);
        fournisseur.getAdresses().remove(this);
        return this;
    }

    public void setFounisseurs(Set<Fournisseur> fournisseurs) {
        this.founisseurs = fournisseurs;
    }

    public Set<Client> getClients() {
        return clients;
    }

    public Adresse clients(Set<Client> clients) {
        this.clients = clients;
        return this;
    }

    public Adresse addClient(Client client) {
        this.clients.add(client);
        client.getAdresses().add(this);
        return this;
    }

    public Adresse removeClient(Client client) {
        this.clients.remove(client);
        client.getAdresses().remove(this);
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
        Adresse adresse = (Adresse) o;
        if (adresse.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), adresse.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Adresse{" +
            "id=" + getId() +
            ", pays='" + getPays() + "'" +
            ", region='" + getRegion() + "'" +
            ", ville='" + getVille() + "'" +
            ", rue='" + getRue() + "'" +
            ", codePostal=" + getCodePostal() +
            "}";
    }
}
