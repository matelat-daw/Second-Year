package com.futureprograms.AnimalDB.Services;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Repositories.AnimalInterface;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.function.Function;

@Primary
@Service
public class AnimalServiceDB {

    /*@Qualifier("animalInterface")
    @Autowired*/
    private AnimalInterface animalInterface;

    public List<Animal> getList() {
        return animalInterface.findAll(); // Recupera todos los animales
    }

    public Animal animalDetails(int id) {
        return animalInterface.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Animal no encontrado con id: " + id)); // Busca por ID
    }

    public Animal save(Animal animal) {
        animalInterface.save(animal); // Guarda el nuevo animal en la base de datos
        return animal;
    }

    public Animal animalUpdate(int id, Animal updatedAnimal) {
        Animal existingAnimal = animalInterface.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Animal no encontrado con id: " + id));

        // Actualiza los campos del animal existente
        existingAnimal.setName(updatedAnimal.getName());
        existingAnimal.setAge(updatedAnimal.getAge());
        existingAnimal.setExtinct(updatedAnimal.getExtinct());

        return animalInterface.save(existingAnimal); // Guarda los cambios
    }

    /*public void animalDelete(int id) {
        animalInterface.deleteById(id); // Elimina el animal por ID
    }*/

    public void deleteById(int id) {
        animalInterface.deleteById(id); // Elimina el animal por ID
    }
}