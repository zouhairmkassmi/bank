package com.bank.service;

import com.bank.domain.Contrat;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Contrat.
 */
public interface ContratService {

    /**
     * Save a contrat.
     *
     * @param contrat the entity to save
     * @return the persisted entity
     */
    Contrat save(Contrat contrat);

    /**
     * Get all the contrats.
     *
     * @return the list of entities
     */
    List<Contrat> findAll();

    /**
     * Get all the Contrat with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    Page<Contrat> findAllWithEagerRelationships(Pageable pageable);
    
    /**
     * Get the "id" contrat.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Contrat> findOne(Long id);

    /**
     * Delete the "id" contrat.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
