package org.formation.repository;

import java.util.List;
import java.util.Optional;

import org.formation.model.Fournisseur;
import org.formation.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {

	public List<Produit> findByFournisseur(Fournisseur fournisseur);

	Optional<Produit> findByReferenceAndFournisseurReference(String produitReference, String fournisseurReference);

	
	
}
