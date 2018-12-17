package com.bank.service.impl;

import com.bank.service.ContratService;
import com.bank.domain.Contrat;
import com.bank.repository.ContratRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;
/**
 * Service Implementation for managing Contrat.
 */
@Service
@Transactional
public class ContratServiceImpl implements ContratService {

    private final Logger log = LoggerFactory.getLogger(ContratServiceImpl.class);

    private final ContratRepository contratRepository;

    public ContratServiceImpl(ContratRepository contratRepository) {
        this.contratRepository = contratRepository;
    }

    /**
     * Save a contrat.
     *
     * @param contrat the entity to save
     * @return the persisted entity
     */
    @Override
    public Contrat save(Contrat contrat) {
        log.debug("Request to save Contrat : {}", contrat);        return contratRepository.save(contrat);
    }

    /**
     * Get all the contrats.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Contrat> findAll() {
        log.debug("Request to get all Contrats");
        return contratRepository.findAllWithEagerRelationships();
    }

    /**
     * Get all the Contrat with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    public Page<Contrat> findAllWithEagerRelationships(Pageable pageable) {
        return contratRepository.findAllWithEagerRelationships(pageable);
    }
    

    /**
     * Get one contrat by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Contrat> findOne(Long id) {
        log.debug("Request to get Contrat : {}", id);
        return contratRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the contrat by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Contrat : {}", id);
        contratRepository.deleteById(id);
    }
}
