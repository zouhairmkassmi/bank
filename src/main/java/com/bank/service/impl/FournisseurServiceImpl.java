package com.bank.service.impl;

import com.bank.service.FournisseurService;
import com.bank.domain.Fournisseur;
import com.bank.repository.FournisseurRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;
/**
 * Service Implementation for managing Fournisseur.
 */
@Service
@Transactional
public class FournisseurServiceImpl implements FournisseurService {

    private final Logger log = LoggerFactory.getLogger(FournisseurServiceImpl.class);

    private final FournisseurRepository fournisseurRepository;

    public FournisseurServiceImpl(FournisseurRepository fournisseurRepository) {
        this.fournisseurRepository = fournisseurRepository;
    }

    /**
     * Save a fournisseur.
     *
     * @param fournisseur the entity to save
     * @return the persisted entity
     */
    @Override
    public Fournisseur save(Fournisseur fournisseur) {
        log.debug("Request to save Fournisseur : {}", fournisseur);        return fournisseurRepository.save(fournisseur);
    }

    /**
     * Get all the fournisseurs.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Fournisseur> findAll(Pageable pageable) {
        log.debug("Request to get all Fournisseurs");
        return fournisseurRepository.findAll(pageable);
    }

    /**
     * Get all the Fournisseur with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    public Page<Fournisseur> findAllWithEagerRelationships(Pageable pageable) {
        return fournisseurRepository.findAllWithEagerRelationships(pageable);
    }
    

    /**
     * Get one fournisseur by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Fournisseur> findOne(Long id) {
        log.debug("Request to get Fournisseur : {}", id);
        return fournisseurRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the fournisseur by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Fournisseur : {}", id);
        fournisseurRepository.deleteById(id);
    }
}