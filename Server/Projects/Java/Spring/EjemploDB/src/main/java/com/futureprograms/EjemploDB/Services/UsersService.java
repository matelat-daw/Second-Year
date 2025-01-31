package com.futureprograms.EjemploDB.Services;

import com.futureprograms.EjemploDB.Models.Users;
import com.futureprograms.EjemploDB.Repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Users> findAll() {
        return usersRepository.findAll();
    }

    public Optional<Users> findById(Long id) {
        return usersRepository.findById(id);
    }

    public Users save(Users prueba) {
        // Encriptar la contraseña antes de guardar
        prueba.setPassword(passwordEncoder.encode(prueba.getPassword()));
        return usersRepository.save(prueba);
    }

    public void deleteById(Long id) {
        usersRepository.deleteById(id);
    }

    public Optional<Users> findByEmail(String email) {
        return usersRepository.findByEmail(email);
    }
}