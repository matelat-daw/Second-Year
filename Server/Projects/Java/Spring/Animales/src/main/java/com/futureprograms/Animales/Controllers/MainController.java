package com.futureprograms.Animales.Controllers;

import com.futureprograms.Animales.Models.Animales;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String index(Model model)
    {
        model.addAttribute("title", "Página Pricipal");
        return "index";
    }

    @GetMapping("/create")
    public String greetingForm(Model model) {
        model.addAttribute("title", "Formulario pra Agregar un Animal");
        model.addAttribute("create", new Animales());
        return "create";
    }

    @PostMapping("/create")
    public String greetingSubmit(@ModelAttribute Animales animal, Model model) {
        model.addAttribute("title", "Página de Saludo");
        model.addAttribute("create", animal);
        return "result";
    }
}