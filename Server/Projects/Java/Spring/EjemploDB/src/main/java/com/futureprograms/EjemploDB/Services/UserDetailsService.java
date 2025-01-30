package com.futureprograms.EjemploDB.Services;

import com.futureprograms.EjemploDB.Models.Users;
import com.futureprograms.EjemploDB.Repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService
{
    @Autowired
    private UsersRepository pruebaRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users prueba = pruebaRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));
        return User.builder()
                .username(prueba.getEmail())
                .password(prueba.getPassword())
                .roles("USER") // Ajusta los roles según sea necesario
                .build();
    }

}
