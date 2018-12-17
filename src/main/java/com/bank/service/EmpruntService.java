package com.bank.service;

import com.bank.domain.Emprunt;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Emprunt.
 */
public interface EmpruntService {

    /**
     * Save a emprunt.
     *
     * @param emprunt the entity to save
     * @return the persisted entity
     */
    Emprunt save(Emprunt emprunt);

    /**
     * Get all the emprunts.
     *
     * @return the list of entities
     */
    List<Emprunt> findAll();


    /**
     * Get the "id" emprunt.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Emprunt> findOne(Long id);

    /**
     * Delete the "id" emprunt.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
