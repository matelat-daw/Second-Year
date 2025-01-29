package com.futureprograms.EjemploDB.Repositories;

import com.futureprograms.EjemploDB.Models.Prueba;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PruebaRepository extends JpaRepository<Prueba, Long> {
    Optional<Prueba> findByEmail(String email);

}