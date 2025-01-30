package com.futureprograms.EjemploDB.Repositories;

import com.futureprograms.EjemploDB.Models.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Roles, Long> {
    Optional<Roles> findByName(String name);
}