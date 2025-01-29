package com.futureprograms.EjemploDB.Controllers;

import com.futureprograms.EjemploDB.Models.Prueba;
import com.futureprograms.EjemploDB.Services.PruebaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/pruebas")
public class PruebaController {
    @Autowired
    private PruebaService pruebaService;

    @GetMapping
    public List<Prueba> getAll() {
        return pruebaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prueba> getById(@PathVariable Long id) {
        return pruebaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Prueba create(@RequestBody Prueba prueba) {
        return pruebaService.save(prueba);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prueba> update(@PathVariable Long id, @RequestBody Prueba prueba) {
        return pruebaService.findById(id).map(existing -> {
            prueba.setId(id);
            return ResponseEntity.ok(pruebaService.save(prueba));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return pruebaService.findById(id).map(p -> {
            pruebaService.deleteById(id);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}