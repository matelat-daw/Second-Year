package com.futureprograms.Animales.Controllers;

import com.futureprograms.Animales.Models.Animal;
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
    public String createForm(Model model) {
        model.addAttribute("title", "Formulario pra Agregar un Animal");
        model.addAttribute("animal", new Animal());
        return "create";
    }

    @PostMapping("/create")
    public String createSubmit(@ModelAttribute("animal") Animal animal, Model model) {
        model.addAttribute("title", "Página para Ver los Animales");
        model.addAttribute("animal", animal);
        return "result";
    }
}