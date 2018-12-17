package com.bank.service.impl;

import com.bank.service.EmpruntService;
import com.bank.domain.Emprunt;
import com.bank.repository.EmpruntRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;
/**
 * Service Implementation for managing Emprunt.
 */
@Service
@Transactional
public class EmpruntServiceImpl implements EmpruntService {

    private final Logger log = LoggerFactory.getLogger(EmpruntServiceImpl.class);

    private final EmpruntRepository empruntRepository;

    public EmpruntServiceImpl(EmpruntRepository empruntRepository) {
        this.empruntRepository = empruntRepository;
    }

    /**
     * Save a emprunt.
     *
     * @param emprunt the entity to save
     * @return the persisted entity
     */
    @Override
    public Emprunt save(Emprunt emprunt) {
        log.debug("Request to save Emprunt : {}", emprunt);        return empruntRepository.save(emprunt);
    }

    /**
     * Get all the emprunts.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Emprunt> findAll() {
        log.debug("Request to get all Emprunts");
        return empruntRepository.findAll();
    }


    /**
     * Get one emprunt by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Emprunt> findOne(Long id) {
        log.debug("Request to get Emprunt : {}", id);
        return empruntRepository.findById(id);
    }

    /**
     * Delete the emprunt by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Emprunt : {}", id);
        empruntRepository.deleteById(id);
    }
}
