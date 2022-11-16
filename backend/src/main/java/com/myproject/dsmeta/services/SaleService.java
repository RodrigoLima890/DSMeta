package com.myproject.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myproject.dsmeta.entity.Sale;
import com.myproject.dsmeta.repositories.SalesRepository;

@Service
public class SaleService {
	@Autowired
	private SalesRepository salesRepository;

	public List<Sale> findAll(){
		return salesRepository.findAll();
	}
}
