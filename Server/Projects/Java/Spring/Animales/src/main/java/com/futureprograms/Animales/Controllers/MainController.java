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
        List<Animal> animales = as.getList();
        model.addAttribute("animales", as.getList());
        return "index";
    }

    @GetMapping("/create")
    public String createForm(Model model) {
        model.addAttribute("title", "Formulario para Agregar un Animal");
        model.addAttribute("animal", new Animal());
        return "create";
    }

    @PostMapping("/create")
    public String createSubmit(@Validated @ModelAttribute("animal") Animal animal, Model model) {
        as.animalCreate(animal);
        model.addAttribute("title", "Página para Ver los Animales");
        model.addAttribute("animales", as.getList());
        return "index";
    }

    @GetMapping("/details/{id}")
    public String animalDetails(@RequestParam("id") Integer id, Model model)
    {
        model.addAttribute("title", "Detalles de un Animal");
        return "redirect:create/id";
    }

    @GetMapping("/delete/{id}")
    public String animalDelete(@RequestParam("id") int id)
    {
        as.animalDelete(id);
        return "index";
    }
}