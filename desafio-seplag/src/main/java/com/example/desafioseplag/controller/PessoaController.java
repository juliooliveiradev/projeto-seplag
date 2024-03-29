package com.example.desafioseplag.controller;

import com.example.desafioseplag.model.Pessoa;
import com.example.desafioseplag.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {
    @Autowired
    private PessoaService pessoaService;

    // Endpoint para criar uma nova pessoa
    @PostMapping
    public Pessoa criarPessoa(@RequestBody Pessoa pessoa) {
        return pessoaService.criarPessoa(pessoa);
    }

    // Endpoint para recuperar todas as pessoas
    @GetMapping
    public List<Pessoa> recuperarTodasPessoas() {
        return pessoaService.recuperarTodasPessoas();
    }

    // Endpoint para recuperar uma pessoa por ID
    @GetMapping("/{id}")
    public Pessoa recuperarPessoaPorId(@PathVariable Long id) {
        return pessoaService.recuperarPessoaPorId(id)
                .orElseThrow(() -> new RuntimeException("Pessoa não encontrada com ID: " + id));
    }

    // Endpoint para atualizar uma pessoa
    @PutMapping("/{id}")
    public Pessoa atualizarPessoa(@PathVariable Long id, @RequestBody Pessoa pessoaAtualizada) {
        pessoaAtualizada.setId(id); // Garante que o ID da pessoa a ser atualizada seja o mesmo passado na URL
        return pessoaService.atualizarPessoa(pessoaAtualizada);
    }

    // Endpoint para excluir uma pessoa
    @DeleteMapping("/{id}")
    public void excluirPessoa(@PathVariable Long id) {
        pessoaService.excluirPessoa(id);
    }
}
