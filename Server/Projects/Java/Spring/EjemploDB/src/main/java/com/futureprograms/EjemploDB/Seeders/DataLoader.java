package com.futureprograms.EjemploDB.Seeders;

import com.futureprograms.EjemploDB.Models.Prueba;
import com.futureprograms.EjemploDB.Models.Role;
import com.futureprograms.EjemploDB.Repositories.PruebaRepository;
import com.futureprograms.EjemploDB.Repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class DataLoader implements CommandLineRunner
{
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PruebaRepository pruebaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Crear roles si no existen
        Role adminRole = roleRepository.findByName("ADMIN").orElseGet(() -> {
            Role role = new Role();
            role.setName("ADMIN");
            return roleRepository.save(role);
        });

        Role userRole = roleRepository.findByName("USER").orElseGet(() -> {
            Role role = new Role();
            role.setName("USER");
            return roleRepository.save(role);
        });

        // Crear usuarios con los roles
        if (pruebaRepository.findByEmail("admin@example.com").isEmpty()) {
            Prueba admin = new Prueba();
            admin.setName("Admin");
            admin.setEmail("admin@example.com");
            admin.setPassword(passwordEncoder.encode("admin123")); // Contraseña encriptada
            admin.setRoles(Set.of(adminRole));
            pruebaRepository.save(admin);
        }

        if (pruebaRepository.findByEmail("user@example.com").isEmpty()) {
            Prueba user = new Prueba();
            user.setName("User");
            user.setEmail("user@example.com");
            user.setPassword(passwordEncoder.encode("user123")); // Contraseña encriptada
            user.setRoles(Set.of(userRole));
            pruebaRepository.save(user);
        }
    }

}
