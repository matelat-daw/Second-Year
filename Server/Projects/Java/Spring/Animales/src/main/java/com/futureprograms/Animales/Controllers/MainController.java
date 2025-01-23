package com.futureprograms.Animales.Controllers;

import com.futureprograms.Animales.Models.Animal;
import com.futureprograms.Animales.Services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {

    @Autowired
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
    public String animalDetails(@PathVariable("id") Integer id, Model model)
    {
        model.addAttribute("title", "Detalles de un Animal");
        model.addAttribute("animal", as.animalId(id));
        return "details";
    }

    @GetMapping("/update/{id}")
    public String showUpdateForm(@PathVariable("id") int id, Model model) {
        Animal animal = as.animalUpdate(id);
        model.addAttribute("animal", animal);
        return "create";
    }

    @PostMapping("/update/{id}")
    public String updateAnimal(@Validated @PathVariable("id") int id, @ModelAttribute("animal") Animal animal) {
        Animal existingAnimal = as.animalUpdate(id);
        existingAnimal.setName(animal.getName());
        existingAnimal.setAge(animal.getAge());
        existingAnimal.setExtinct(animal.getExtinct());
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String deleteAnimal(@PathVariable("id") int id) {
        as.animalDelete(id);
        return "redirect:/";
    }

    /*@GetMapping("/delete/{id}")
    public String animalDelete(@RequestParam("id") int id)
    {
        as.animalDelete(id);
        return "redirect:/";
    }*/
}