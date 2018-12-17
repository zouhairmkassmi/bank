package com.bank.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.bank.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.bank.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.bank.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.bank.domain.Client.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Client.class.getName() + ".comptes", jcacheConfiguration);
            cm.createCache(com.bank.domain.Client.class.getName() + ".ratings", jcacheConfiguration);
            cm.createCache(com.bank.domain.Client.class.getName() + ".adresses", jcacheConfiguration);
            cm.createCache(com.bank.domain.Compte.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Categorie.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Categorie.class.getName() + ".produits", jcacheConfiguration);
            cm.createCache(com.bank.domain.Categorie.class.getName() + ".fournisseurs", jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName() + ".produits", jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName() + ".categories", jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName() + ".adresses", jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName() + ".ratings", jcacheConfiguration);
            cm.createCache(com.bank.domain.Produit.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Produit.class.getName() + ".categories", jcacheConfiguration);
            cm.createCache(com.bank.domain.Produit.class.getName() + ".founisseurs", jcacheConfiguration);
            cm.createCache(com.bank.domain.Produit.class.getName() + ".emprunts", jcacheConfiguration);
            cm.createCache(com.bank.domain.Emprunt.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Emprunt.class.getName() + ".clients", jcacheConfiguration);
            cm.createCache(com.bank.domain.Emprunt.class.getName() + ".produits", jcacheConfiguration);
            cm.createCache(com.bank.domain.Rating.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Rating.class.getName() + ".clients", jcacheConfiguration);
            cm.createCache(com.bank.domain.Rating.class.getName() + ".fournisseurs", jcacheConfiguration);
            cm.createCache(com.bank.domain.Transaction.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Transaction.class.getName() + ".comptes", jcacheConfiguration);
            cm.createCache(com.bank.domain.Adresse.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Adresse.class.getName() + ".founisseurs", jcacheConfiguration);
            cm.createCache(com.bank.domain.Adresse.class.getName() + ".clients", jcacheConfiguration);
            cm.createCache(com.bank.domain.Client.class.getName() + ".contrats", jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName() + ".comptes", jcacheConfiguration);
            cm.createCache(com.bank.domain.Fournisseur.class.getName() + ".contrats", jcacheConfiguration);
            cm.createCache(com.bank.domain.Produit.class.getName() + ".contrats", jcacheConfiguration);
            cm.createCache(com.bank.domain.Emprunt.class.getName() + ".fournisseurs", jcacheConfiguration);
            cm.createCache(com.bank.domain.Emprunt.class.getName() + ".contrats", jcacheConfiguration);
            cm.createCache(com.bank.domain.Transaction.class.getName() + ".contrats", jcacheConfiguration);
            cm.createCache(com.bank.domain.Contrat.class.getName(), jcacheConfiguration);
            cm.createCache(com.bank.domain.Contrat.class.getName() + ".produits", jcacheConfiguration);
            cm.createCache(com.bank.domain.Contrat.class.getName() + ".transactions", jcacheConfiguration);
            cm.createCache(com.bank.domain.Contrat.class.getName() + ".fournisseurs", jcacheConfiguration);
            cm.createCache(com.bank.domain.Contrat.class.getName() + ".clients", jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
