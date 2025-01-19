package com.futureprograms.Animales.Services;

import com.futureprograms.Animales.Models.Animal;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class AnimalService {
    private static List<Animal> animales;
    static {
        animales = new ArrayList<>();
        animales.add(new Animal("1", "perro", "15", false));
    }

    public List<Animal> listaAnimales()
    {
        return animales;
    }

    public Animal animalId(int id)
    {
        Animal animal = null;
        return animal;
    }

    public void animalCreate(Animal animal)
    {
        animales.add(animal);
    }

    public Animal animalUpdate(int id)
    {
        Animal animal = null;
        return animal;
    }

    public void animalDelete(int id)
    {
        Animal animal = null;
    }
}