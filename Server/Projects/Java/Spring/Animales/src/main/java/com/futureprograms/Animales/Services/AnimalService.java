package com.futureprograms.Animales.Services;

import com.futureprograms.Animales.Models.Animal;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class AnimalService {
    private static List<Animal> animales;
    static {
        animales = new ArrayList<>();
        animales.add(new Animal(1, "perro", "15", false));
    }
    public static Integer Id = animales.size() + 1;

    public List<Animal> getList()
    {
        return animales;
    }

    public List<Animal> animalId(int id)
    {
        return null;
        /*return animal = animales.indexOf(id);*/
    }

    public void animalCreate(Animal animal)
    {
        animal.setId(Id);
        Animal newAnimal = new Animal(animal.getId(), animal.getName(), animal.getAge(), animal.getExtinct());
        animales.add(newAnimal);
        Id++;
        System.out.println(Id);
    }

    public Animal animalUpdate(int id)
    {
        Animal editAnimal = null;
        for(Animal animal : getList())
        {
            if(animal.getId().equals(id))
            {
                editAnimal = animal;
            }
        }
        return editAnimal;
    }

    public void animalDelete(int id)
    {
        animales.remove((Integer) id);
    }
}