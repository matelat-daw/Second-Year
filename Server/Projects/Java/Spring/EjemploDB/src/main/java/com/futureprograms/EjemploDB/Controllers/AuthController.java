package com.futureprograms.EjemploDB.Controllers;

import com.futureprograms.EjemploDB.Services.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AuthController {
    @Autowired
    UserDetailsService uds;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    /*@PostMapping("/login")
    public String list(Model model) {
        model.addAttribute("title", "Lista de Personas");
        model.addAttribute("prueba", uds.loadUserByUsername(model.asMap().get("username").toString()));
        return "list";
    }*/
}