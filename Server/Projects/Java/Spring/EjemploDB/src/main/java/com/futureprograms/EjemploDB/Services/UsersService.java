package com.futureprograms.EjemploDB.Services;

import com.futureprograms.EjemploDB.Models.Users;
import com.futureprograms.EjemploDB.Repositories.PruebaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PruebaService {
    @Autowired
    private PruebaRepository pruebaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Users> findAll() {
        return pruebaRepository.findAll();
    }

    public Optional<Users> findById(Long id) {
        return pruebaRepository.findById(id);
    }

    public Users save(Users prueba) {
        // Encriptar la contraseña antes de guardar
        prueba.setPassword(passwordEncoder.encode(prueba.getPassword()));
        return pruebaRepository.save(prueba);
    }

    public void deleteById(Long id) {
        pruebaRepository.deleteById(id);
    }

    public Optional<Users> findByEmail(String email) {
        return pruebaRepository.findByEmail(email);
    }
}