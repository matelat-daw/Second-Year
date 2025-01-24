package com.futureprograms.Animales.Services;

import com.futureprograms.Animales.Models.Animal;
import com.futureprograms.Animales.Repositories.AnimalInterface;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class AnimalService implements AnimalInterface {
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

    public Animal animalDetails(int id)
    {
        int index = 0;
        for(Animal animal : animales) {
            if(id == animal.getId())
            {
                return animal;
            }
            index++;
        }
        return null;
    }

    public void animalCreate(Animal animal)
    {
        animal.setId(Id);
        Animal newAnimal = new Animal(animal.getId(), animal.getName(), animal.getAge(), animal.getExtinct());
        animales.add(newAnimal);
        Id++;
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
        int index = 0;
        for(Animal animal : animales) {
            if(id == animal.getId())
            {
                animales.remove(index);
                break;
            }
            index++;
        }
    }
}