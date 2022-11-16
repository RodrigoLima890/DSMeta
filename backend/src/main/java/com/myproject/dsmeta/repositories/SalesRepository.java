package com.myproject.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myproject.dsmeta.entity.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long> {

}
