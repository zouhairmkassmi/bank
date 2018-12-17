package com.bank.repository;

import com.bank.domain.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Transaction entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Query(value = "select distinct transaction from Transaction transaction left join fetch transaction.contrats",
        countQuery = "select count(distinct transaction) from Transaction transaction")
    Page<Transaction> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct transaction from Transaction transaction left join fetch transaction.contrats")
    List<Transaction> findAllWithEagerRelationships();

    @Query("select transaction from Transaction transaction left join fetch transaction.contrats where transaction.id =:id")
    Optional<Transaction> findOneWithEagerRelationships(@Param("id") Long id);

}
