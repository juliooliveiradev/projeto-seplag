package com.example.desafioseplag.service;

import com.example.desafioseplag.model.Pessoa;
import com.example.desafioseplag.model.Status;
import com.example.desafioseplag.repository.PessoaRepository;
import com.example.desafioseplag.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PessoaService {
    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private StatusRepository statusRepository;

    // Método para criar uma nova pessoa
    public Pessoa criarPessoa(Pessoa pessoa) {
        Long statusId = pessoa.getStatus().getId();
        Optional<Status> statusOptional = statusRepository.findById(statusId);

        if (statusOptional.isPresent()) {
            Status status = statusOptional.get();
            pessoa.getStatus().setDescricao(status.getDescricao());
        } else {
            throw new RuntimeException("Status não encontrado com ID: " + statusId);
        }

        pessoa.setDataCadastro(LocalDateTime.now());
        return pessoaRepository.save(pessoa);
    }

    // Método para recuperar todas as pessoas
    public List<Pessoa> recuperarTodasPessoas() {
        return pessoaRepository.findAll();
    }

    // Método para recuperar uma pessoa pelo ID
    public Optional<Pessoa> recuperarPessoaPorId(Long id) {
        return pessoaRepository.findById(id);
    }

    // Método para atualizar uma pessoa
    public Pessoa atualizarPessoa(Pessoa pessoa) {
        Long statusId = pessoa.getStatus().getId();
        Optional<Status> statusOptional = statusRepository.findById(statusId);

        if (statusOptional.isPresent()) {
            Status status = statusOptional.get();
            pessoa.getStatus().setDescricao(status.getDescricao());
        } else {
            throw new RuntimeException("Status não encontrado com ID: " + statusId);
        }

        pessoa.setDataCadastro(LocalDateTime.now());
        return pessoaRepository.save(pessoa);
    }

    // Método para excluir uma pessoa
    public void excluirPessoa(Long id) {
        pessoaRepository.deleteById(id);
    }
}
