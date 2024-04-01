package com.example.desafioseplag.controller;

import com.example.desafioseplag.model.Pessoa;
import com.example.desafioseplag.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    // Endpoint para filtrar pessoas
    @GetMapping("/filtrar")
    public ResponseEntity<List<Pessoa>> filtrarPessoas(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String sobrenome,
            @RequestParam(required = false) String cpf,
            @RequestParam(required = false) String statusDescricao,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date dataInicio,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date dataFim) {

        List<Pessoa> pessoasFiltradas = pessoaService.filtrarPessoas(nome, sobrenome, cpf, statusDescricao, dataInicio, dataFim);

        if (pessoasFiltradas.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(pessoasFiltradas, HttpStatus.OK);
    }

}
