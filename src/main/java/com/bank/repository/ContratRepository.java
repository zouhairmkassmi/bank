package com.bank.repository;

import com.bank.domain.Contrat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Contrat entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContratRepository extends JpaRepository<Contrat, Long> {

    @Query(value = "select distinct contrat from Contrat contrat left join fetch contrat.produits",
        countQuery = "select count(distinct contrat) from Contrat contrat")
    Page<Contrat> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct contrat from Contrat contrat left join fetch contrat.produits")
    List<Contrat> findAllWithEagerRelationships();

    @Query("select contrat from Contrat contrat left join fetch contrat.produits where contrat.id =:id")
    Optional<Contrat> findOneWithEagerRelationships(@Param("id") Long id);

}
