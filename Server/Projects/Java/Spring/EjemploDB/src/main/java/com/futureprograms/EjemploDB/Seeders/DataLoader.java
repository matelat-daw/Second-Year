package com.futureprograms.EjemploDB.Seeders;

import com.futureprograms.EjemploDB.Models.Users;
import com.futureprograms.EjemploDB.Models.Roles;
import com.futureprograms.EjemploDB.Repositories.UsersRepository;
import com.futureprograms.EjemploDB.Repositories.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import java.util.Set;

@Component
public class DataLoader implements CommandLineRunner
{
    @Autowired
    private RolesRepository roleRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        // Crear roles si no existen.
        Roles adminRole = roleRepository.findByName("ADMIN").orElseGet(() -> {
            Roles role = new Roles();
            role.setName("ADMIN");

            return roleRepository.save(role);
        });

        Roles userRole = roleRepository.findByName("USER").orElseGet(() -> {
            Roles role = new Roles();
            role.setName("USER");
            return roleRepository.save(role);
        });

        Roles managerRole = roleRepository.findByName("MANAGER").orElseGet(() -> {
            Roles role = new Roles();
            role.setName("MANAGER");
            return roleRepository.save(role);
        });

        // Crear usuarios con los roles si no existen.
        if (usersRepository.findByEmail("admin@example.com").isEmpty()) {
                Users admin = new Users();
                admin.setName("Admin");
                admin.setEmail("admin@example.com");
                admin.setPassword(passwordEncoder.encode("admin123")); // Contraseña encriptada
                admin.setRoles(Set.of(adminRole));
                usersRepository.save(admin);
        }

        if (usersRepository.findByEmail("manager@example.com").isEmpty()) {
            Users admin = new Users();
            admin.setName("Manager");
            admin.setEmail("manager@example.com");
            admin.setPassword(passwordEncoder.encode("namager123")); // Contraseña encriptada
            admin.setRoles(Set.of(adminRole, managerRole));
            usersRepository.save(admin);
        }

        if (usersRepository.findByEmail("user@example.com").isEmpty()) {
            Users user = new Users();
            user.setName("User");
            user.setEmail("user@example.com");
            user.setPassword(passwordEncoder.encode("user123")); // Contraseña encriptada
            user.setRoles(Set.of(userRole));
            usersRepository.save(user);
        }
    }
}