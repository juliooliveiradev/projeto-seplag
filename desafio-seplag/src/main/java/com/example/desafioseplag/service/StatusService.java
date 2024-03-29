package com.example.desafioseplag.service;

import com.example.desafioseplag.model.Status;
import com.example.desafioseplag.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StatusService {
    @Autowired
    private StatusRepository statusRepository;

    // Método para criar um novo status
    public Status criarStatus(Status status) {
        return statusRepository.save(status);
    }

    // Método para recuperar todos os status
    public List<Status> recuperarTodosStatus() {
        return statusRepository.findAll();
    }

    // Método para recuperar um status pelo ID
    public Optional<Status> recuperarStatusPorId(Long id) {
        return statusRepository.findById(id);
    }

    // Método para atualizar um status
    public Status atualizarStatus(Status status) {
        return statusRepository.save(status);
    }

    // Método para excluir um status
    public void excluirStatus(Long id) {
        statusRepository.deleteById(id);
    }
}
