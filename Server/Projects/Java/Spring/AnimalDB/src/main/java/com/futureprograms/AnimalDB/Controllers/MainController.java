package com.futureprograms.AnimalDB.Controllers;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Repositories.AnimalInterface;
import com.futureprograms.AnimalDB.Services.AnimalServiceDB;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/animals")
public class MainController {

    private AnimalServiceDB as;
    private AnimalInterface ai;

    public MainController(AnimalInterface ai, AnimalServiceDB as)
    {
        this.as = as;
        this.ai = ai;
    }

    @GetMapping("index")
    public String index(Model model) {
        model.addAttribute("title", "Página Pricipal");
        model.addAttribute("animales", ai.findAll());
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
        ai.save(animal);
        model.addAttribute("title", "Página para Ver los Animales");
        model.addAttribute("animales", ai.findAll());
        return "index";
    }

    @GetMapping("/details/{id}")
    public String animalDetails(@PathVariable("id") int id, Model model)
    {
        model.addAttribute("title", "Detalles de un Animal");
        model.addAttribute("animal", ai.findById(id));
        return "details";
    }

    @GetMapping("/update/{id}")
    public String showUpdateForm(@PathVariable("id") int id, Model model) {
        model.addAttribute("title", "Actualización de un Animal");
        model.addAttribute("animal", ai.findById(id));
        return "update";
    }

    @PostMapping("/update")
    public String updateAnimal(@Validated @ModelAttribute("animal") Animal animal) {
        Animal existingAnimal = as.animalUpdate(animal.getId(), animal);
        existingAnimal.setName(animal.getName());
        existingAnimal.setAge(animal.getAge());
        existingAnimal.setExtinct(animal.getExtinct());
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String deleteAnimal(@PathVariable("id") int id) {
        ai.deleteById(id);
        return "redirect:/";
    }
}