package com.futureprograms.AnimalDB.Controllers;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Services.AnimalServiceDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animals")
public class MainController {

    @Autowired
    private AnimalServiceDB animalService;

    @GetMapping
    public List<Animal> getAllAnimals() {
        return animalService.getList();
    }

    @GetMapping("/{id}")
    public Animal getAnimal(@PathVariable int id) {
        return animalService.animalDetails(id);
    }

    @PostMapping
    public void createAnimal(@RequestBody Animal animal) {
        animalService.save(animal);
    }

    @PutMapping("/{id}")
    public Animal updateAnimal(@PathVariable int id, @RequestBody Animal updatedAnimal) {
        return animalService.animalUpdate(id, updatedAnimal);
    }

    @DeleteMapping("/{id}")
    public void deleteAnimal(@PathVariable int id) {
        /*animalService.animalDelete(id);*/
        animalService.deleteById(id);
    }
}
