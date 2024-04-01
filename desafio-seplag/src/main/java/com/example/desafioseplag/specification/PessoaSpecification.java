package com.example.desafioseplag.specification;

import com.example.desafioseplag.model.Pessoa;
import com.example.desafioseplag.model.Status;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.*;
import java.util.Date;

public class PessoaSpecification {

    public static Specification<Pessoa> filtrarPorAtributos(String nome, String sobrenome, String cpf, String statusDescricao, Date dataInicio, Date dataFim) {
        return (root, query, criteriaBuilder) -> {
            Predicate predicate = criteriaBuilder.conjunction();

            if (nome != null && !nome.isEmpty()) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.like(root.get("nome"), "%" + nome + "%"));
            }

            if (sobrenome != null && !sobrenome.isEmpty()) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.like(root.get("sobrenome"), "%" + sobrenome + "%"));
            }

            if (cpf != null && !cpf.isEmpty()) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("cpf"), cpf));
            }

            if (statusDescricao != null && !statusDescricao.isEmpty()) {
                Join<Pessoa, Status> joinStatus = root.join("status");
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.like(joinStatus.get("descricao"), "%" + statusDescricao + "%"));
            }

            if (dataInicio != null && dataFim != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.between(root.get("dataCadastro"), dataInicio, dataFim));
            }

            return predicate;
        };
    }
}
