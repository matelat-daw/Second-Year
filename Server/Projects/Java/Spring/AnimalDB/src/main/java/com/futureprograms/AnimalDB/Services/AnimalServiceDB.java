package com.futureprograms.AnimalDB.Services;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Repositories.AnimalInterface;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import java.util.*;

@Primary
@Service
public class AnimalServiceDB {
    private AnimalInterface ai;

    private static List<Animal> animales;
    /*static {
        animales = new ArrayList<>();
        animales.add(new Animal(1, "Perro", 15, false));
    }*/

    public List<Animal> findAll() {
        animales = ai.findAll().stream().toList();
        return animales; // Recupera todos los animales
    }

    public Animal findById(int id) {
        return ai.findById(id); // Busca por ID
    }

    public Animal save(Animal animal) {
        ai.save(animal); // Guarda el nuevo animal en la base de datos
        return animal;
    }

    public Animal animalUpdate(int id, Animal updatedAnimal) {
        Animal existingAnimal = ai.findById(id);

        // Actualiza los campos del animal existente
        existingAnimal.setName(updatedAnimal.getName());
        existingAnimal.setAge(updatedAnimal.getAge());
        existingAnimal.setExtinct(updatedAnimal.getExtinct());

        return ai.save(existingAnimal); // Guarda los cambios
    }

    public void deleteById(int id) {
        ai.deleteById(id); // Elimina el animal por ID
    }
}