package org.formation.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

import org.formation.model.Fournisseur;
import org.formation.model.Produit;
import org.formation.repository.FournisseurRepository;
import org.formation.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produits")
public class ProduitRestController {

	
	@Autowired
	ProduitRepository produitRepository;
	
	@Autowired
	FournisseurRepository fournisseurRepository;
	
	@GetMapping
	public List<Produit> findAll() {
		return produitRepository.findAll();
	}
	
	@GetMapping(path = "/{id}")
	public Produit findById(@PathVariable long id) throws ProduitNotFoundException {
		
		return produitRepository.findById(id).orElseThrow(() -> new ProduitNotFoundException("No such Id"));
	}
	
	@GetMapping("/fournisseur/{fournisseurId}")
	List<Produit> findByFournisseur(@PathVariable("fournisseurId") long fournisseurId) {

		Fournisseur fournisseur = fournisseurRepository.findById(fournisseurId)
				.orElseThrow(() -> new EntityNotFoundException("Fournisseur inconnu :" + fournisseurId));
		return produitRepository.findByFournisseur(fournisseur);
	}
	@PostMapping
	public ResponseEntity<Produit> createProduit(@Valid @RequestBody Produit produit) {
		
		produit = produitRepository.save(produit);
		
		return new ResponseEntity<Produit>(produit, HttpStatus.CREATED);
	}
	@PutMapping
	public ResponseEntity<Produit> updateProduit(@Valid @RequestBody Produit produit) {
		
		if ( produit.getId() != 0 )
			return new ResponseEntity<Produit>(produit, HttpStatus.BAD_REQUEST);
		
		produit = produitRepository.save(produit);
		
		return new ResponseEntity<Produit>(produit, HttpStatus.ACCEPTED);
	}
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable long id) throws ProduitNotFoundException {
		Produit p = produitRepository.findById(id).orElseThrow(() -> new ProduitNotFoundException("No such Id"));
		
		produitRepository.delete(p);
		
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}

}
