package com.bank.service;

import com.bank.domain.Fournisseur;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Fournisseur.
 */
public interface FournisseurService {

    /**
     * Save a fournisseur.
     *
     * @param fournisseur the entity to save
     * @return the persisted entity
     */
    Fournisseur save(Fournisseur fournisseur);

    /**
     * Get all the fournisseurs.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Fournisseur> findAll(Pageable pageable);

    /**
     * Get all the Fournisseur with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    Page<Fournisseur> findAllWithEagerRelationships(Pageable pageable);
    
    /**
     * Get the "id" fournisseur.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Fournisseur> findOne(Long id);

    /**
     * Delete the "id" fournisseur.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
