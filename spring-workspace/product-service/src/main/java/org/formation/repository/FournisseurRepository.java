package org.formation.repository;

import java.util.List;

import org.formation.model.Fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {

	public List<Fournisseur> findByNomContainingIgnoreCase(String q);
	
	@Query("select distinct p.fournisseur from Produit p where p.availability >= ?1")
	public List<Fournisseur> findWithQuantityProduit(int availability);
}