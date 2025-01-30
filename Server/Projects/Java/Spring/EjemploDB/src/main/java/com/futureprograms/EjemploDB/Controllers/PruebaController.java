package com.futureprograms.EjemploDB.Controllers;

import com.futureprograms.EjemploDB.Models.Users;
import com.futureprograms.EjemploDB.Services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/pruebas")
public class PruebaController {
    @Autowired
    private UsersService pruebaService;

    @GetMapping
    public List<Users> getAll() {
        return pruebaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getById(@PathVariable Long id) {
        return pruebaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Users create(@RequestBody Users prueba) {
        return pruebaService.save(prueba);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> update(@PathVariable Long id, @RequestBody Users prueba) {
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