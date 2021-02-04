package org.formation.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class FournisseurRepositoryTest {

	@Autowired
	FournisseurRepository fournisseurRepository;
	
	@Test
	public void testContaining() {
		
		assertEquals(1, fournisseurRepository.findByNomContainingIgnoreCase("BELLE").size()); 
		assertEquals(1, fournisseurRepository.findByNomContainingIgnoreCase("Ville").size()); 
		assertEquals(2, fournisseurRepository.findByNomContainingIgnoreCase("b").size()); 
		
	}
	
	@Test
	public void testAvailability() {
		
		assertEquals(2, fournisseurRepository.findWithQuantityProduit(1).size()); 
		assertEquals(1, fournisseurRepository.findWithQuantityProduit(2).size()); 
		assertEquals(0, fournisseurRepository.findWithQuantityProduit(3).size()); 
		
	}
}