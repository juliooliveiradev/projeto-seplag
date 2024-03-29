package com.example.desafioseplag.controller;

import com.example.desafioseplag.model.Status;
import com.example.desafioseplag.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/status")
public class StatusController {
    @Autowired
    private StatusService statusService;

    // Endpoint para criar um novo status
    @PostMapping
    public Status criarStatus(@RequestBody Status status) {
        return statusService.criarStatus(status);
    }

    // Endpoint para recuperar todos os status
    @GetMapping
    public List<Status> recuperarTodosStatus() {
        return statusService.recuperarTodosStatus();
    }

    // Endpoint para recuperar um status por ID
    @GetMapping("/{id}")
    public Status recuperarStatusPorId(@PathVariable Long id) {
        return statusService.recuperarStatusPorId(id)
                .orElseThrow(() -> new RuntimeException("Status não encontrado com ID: " + id));
    }

    // Endpoint para atualizar um status
    @PutMapping("/{id}")
    public Status atualizarStatus(@PathVariable Long id, @RequestBody Status statusAtualizado) {
        statusAtualizado.setId(id); // Garante que o ID do status a ser atualizado seja o mesmo passado na URL
        return statusService.atualizarStatus(statusAtualizado);
    }

    // Endpoint para excluir um status
    @DeleteMapping("/{id}")
    public void excluirStatus(@PathVariable Long id) {
        statusService.excluirStatus(id);
    }
}

