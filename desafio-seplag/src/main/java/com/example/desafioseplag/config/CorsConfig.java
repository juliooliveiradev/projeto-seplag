package com.example.desafioseplag.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200") // Adicione a origem de sua aplicação Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Adicione os métodos HTTP que deseja permitir
                .allowedHeaders("*"); // Permita todos os cabeçalhos
    }
}