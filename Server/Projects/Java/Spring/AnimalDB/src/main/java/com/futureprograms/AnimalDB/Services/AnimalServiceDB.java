package com.futureprograms.AnimalDB.Services;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Repositories.AnimalInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import java.util.*;

@Primary
@Service
public class AnimalServiceDB {

    @Qualifier("animalInterface")
    @Autowired
    private AnimalInterface animalRepository;

    public List<Animal> getList() {
        return animalRepository.findAll(); // Recupera todos los animales
    }

    public Animal animalDetails(int id) {
        return animalRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Animal no encontrado con id: " + id)); // Busca por ID
    }

    public void animalCreate(Animal animal) {
        animalRepository.save(animal); // Guarda el nuevo animal en la base de datos
    }

    public Animal animalUpdate(int id, Animal updatedAnimal) {
        Animal existingAnimal = animalRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Animal no encontrado con id: " + id));

        // Actualiza los campos del animal existente
        existingAnimal.setName(updatedAnimal.getName());
        existingAnimal.setAge(updatedAnimal.getAge());
        existingAnimal.setExtinct(updatedAnimal.getExtinct());

        return animalRepository.save(existingAnimal); // Guarda los cambios
    }

    public void animalDelete(int id) {
        animalRepository.deleteById(id); // Elimina el animal por ID
    }
}