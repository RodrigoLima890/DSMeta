package com.myproject.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.myproject.dsmeta.entity.Sale;
import com.myproject.dsmeta.repositories.SalesRepository;

@Service
public class SaleService {
	@Autowired
	private SalesRepository salesRepository;

	public Page<Sale> findAll(String minDate, String maxDate, Pageable page){
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("")? today.minusYears(1): LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return salesRepository.findSale(min,max,page);
	}
}
