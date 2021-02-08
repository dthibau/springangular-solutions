package org.formation.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.formation.model.Dimension;
import org.formation.model.Produit;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
public class ProduitRepositoryTest {

	
	@Autowired
	ProduitRepository produitRepository;
	
	@Autowired
	EntityManager testEntityManager;
	
	
	@Test
	public void test2Reference() {
		
		assertTrue(produitRepository.findByReferenceAndFournisseurReference("TAN78", "BELLE").isPresent());
		
		assertTrue(produitRepository.findByReferenceAndFournisseurReference("TAN78", "BRICB").isEmpty());
	}
	
	@Test
//	@Transactional
	public void createProduit() {
		Produit p = new Produit();
		p.setNom("New");
		
		Dimension d = new Dimension();
		d.setHauteur(10f);
		d.setLargeur(10f);
		d.setLongueur(10f);
		
		p.setDimension(d);
		
		produitRepository.save(p);
	}
	
	@Test
	@Transactional
	public void updateProduit() {
		
		Produit produit = produitRepository.findById(1l).orElseThrow();
		produit.setNom("New nom");
		
		
		produitRepository.save(produit);
		produitRepository.flush();
		
		produit = produitRepository.findById(1l).orElseThrow();
		
		assertEquals("New nom", produit.getNom());
	}
	
	@Test
	@Transactional
	public void updateProduitWithEm() {
		
		  Produit produit =testEntityManager.find(Produit.class,1l);
		produit.setNom("New nom");
		
		
		testEntityManager.flush();
		testEntityManager.clear();
		
		produit =testEntityManager.find(Produit.class,1l);
		
		assertEquals("New nom", produit.getNom());
	}
	
	
}
