package com.futureprograms.AnimalDB.Services;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Repositories.AnimalInterface;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import java.util.*;

@Primary
@Service
public class AnimalServiceDB {
    private final AnimalInterface ai;

    public AnimalServiceDB(AnimalInterface ai) {
        this.ai = ai;
    }

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
        return ai.findById(id).orElse(null); // Busca por ID y maneja el caso de no encontrar el animal
    }

    public Animal save(Animal animal) {
        return ai.save(animal); // Guarda el nuevo animal en la base de datos y retorna el animal guardado
    }

    public Animal animalUpdate(int id, Animal updatedAnimal) {
        Animal existingAnimal = ai.findById(id).orElse(null);
        if (existingAnimal != null) {
            // Actualiza los campos del animal existente
            existingAnimal.setName(updatedAnimal.getName());
            existingAnimal.setAge(updatedAnimal.getAge());
            existingAnimal.setExtinct(updatedAnimal.getExtinct());
            return ai.save(existingAnimal); // Guarda los cambios y retorna el animal actualizado
        }
        return null; // Retorna null si el animal no existe
    }

    public void deleteById(int id) {
        ai.deleteById(id); // Elimina el animal por ID
    }
}