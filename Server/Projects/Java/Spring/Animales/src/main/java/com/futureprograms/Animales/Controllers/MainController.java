package com.futureprograms.Animales.Controllers;

import com.futureprograms.Animales.Models.Animal;
import com.futureprograms.Animales.Repositories.AnimalInterface;
import com.futureprograms.Animales.Services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {

    /*@Autowired*/
    /*private final AnimalService as;*/
    private final AnimalInterface ai;

    public MainController(AnimalService as, AnimalInterface ai)
    {
        //*this.as = as;*/
        this.ai = ai;
    }

    @GetMapping("/")
    public String index(Model model)
    {
        model.addAttribute("title", "Página Pricipal");
        List<Animal> animales = ai.getList();
        model.addAttribute("animales", ai.getList());
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
        ai.animalCreate(animal);
        model.addAttribute("title", "Página para Ver los Animales");
        model.addAttribute("animales", ai.getList());
        return "index";
    }

    @GetMapping("/details/{id}")
    public String animalDetails(@PathVariable("id") Integer id, Model model)
    {
        model.addAttribute("title", "Detalles de un Animal");
        model.addAttribute("animal", ai.animalDetails(id));
        return "details";
    }

    @GetMapping("/update/{id}")
    public String showUpdateForm(@PathVariable("id") int id, Model model) {
        model.addAttribute("title", "Actualización de un Animal");
        /*Animal animal = ai.animalUpdate(id);*/
        model.addAttribute("animal", model);
        return "update";
    }

    @PostMapping("/update")
    public String updateAnimal(@Validated @ModelAttribute("animal") Animal animal) {
        Animal existingAnimal = ai.animalUpdate(animal.getId());
        existingAnimal.setName(animal.getName());
        existingAnimal.setAge(animal.getAge());
        existingAnimal.setExtinct(animal.getExtinct());
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String deleteAnimal(@PathVariable("id") int id) {
        ai.animalDelete(id);
        return "redirect:/";
    }

    /*@GetMapping("/delete/{id}")
    public String animalDelete(@RequestParam("id") int id)
    {
        as.animalDelete(id);
        return "redirect:/";
    }*/
}