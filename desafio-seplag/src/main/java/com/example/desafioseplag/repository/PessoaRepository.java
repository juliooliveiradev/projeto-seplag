package com.example.desafioseplag.repository;

import com.example.desafioseplag.model.Pessoa;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>, JpaSpecificationExecutor<Pessoa> {

    List<Pessoa> findAll(Specification<Pessoa> specification);
}
