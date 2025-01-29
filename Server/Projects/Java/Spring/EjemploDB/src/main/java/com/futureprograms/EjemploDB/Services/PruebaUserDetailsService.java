package com.futureprograms.EjemploDB.Services;

import com.futureprograms.EjemploDB.Models.Prueba;
import com.futureprograms.EjemploDB.Repositories.PruebaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PruebaUserDetailsService implements UserDetailsService
{
    @Autowired
    private PruebaRepository pruebaRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Prueba prueba = pruebaRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));
        return User.builder()
                .username(prueba.getEmail())
                .password(prueba.getPassword())
                .roles("USER") // Ajusta los roles según sea necesario
                .build();
    }

}
