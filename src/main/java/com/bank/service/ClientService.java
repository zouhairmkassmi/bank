package com.bank.service;

import com.bank.domain.Client;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Client.
 */
public interface ClientService {

    /**
     * Save a client.
     *
     * @param client the entity to save
     * @return the persisted entity
     */
    Client save(Client client);

    /**
     * Get all the clients.
     *
     * @return the list of entities
     */
    List<Client> findAll();

    /**
     * Get all the Client with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    Page<Client> findAllWithEagerRelationships(Pageable pageable);
    
    /**
     * Get the "id" client.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Client> findOne(Long id);

    /**
     * Delete the "id" client.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
