package com.futureprograms.AnimalDB.Services;

import com.futureprograms.AnimalDB.Models.Animal;
import com.futureprograms.AnimalDB.Repositories.AnimalInterface;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class AnimalService implements AnimalInterface {
    private static List<Animal> animales;
    public static Integer Id = animales.size() + 1;
    static {
        animales = new ArrayList<>();
        animales.add(new Animal(1, "perro", "15", false));
    }

    public List<Animal> getList()
    {
        return animales;
    }

    public void animalCreate(Animal animal)
    {
        animal.setId(Id);
        animales.add(animal);
    }

    public Animal animalDetails(int id)
    {
        Animal animal = null;
        return animal;
    }

    public Animal animalUpdate(int id)
    {
        Animal animal = null;
        return animal;
    }

    public void animalDelete(int id)
    {
        int index = animales.indexOf(id);
        animales.remove(index);
    }
}