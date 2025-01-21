package com.futureprograms.Animales.Controllers;

import com.futureprograms.Animales.Models.Animal;
import com.futureprograms.Animales.Services.AnimalService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {

    private final AnimalService as;

    public MainController(AnimalService as)
    {
        this.as = as;
    }

    @GetMapping("/")
    public String index(Model model)
    {
        model.addAttribute("title", "Página Pricipal");
        List<Animal> animales = as.listaAnimales();
        model.addAttribute("animal", animales);
        /*return "index";*/
        return "result";
    }

    @GetMapping("/create")
    public String createForm(Model model) {
        model.addAttribute("title", "Formulario pra Agregar un Animal");
        model.addAttribute("animal", new Animal());
        return "create";
    }

    @PostMapping("/create")
    public String createSubmit(@Validated @ModelAttribute("animal") Animal animal, Model model) {
        as.animalCreate(animal);
        model.addAttribute("title", "Página para Ver los Animales");
        /*model.addAttribute("animal", animal);*/
        return "redirect:/result";
    }
}