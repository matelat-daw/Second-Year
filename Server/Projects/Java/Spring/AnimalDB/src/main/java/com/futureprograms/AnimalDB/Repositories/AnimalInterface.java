package com.futureprograms.AnimalDB.Repositories;

import com.futureprograms.AnimalDB.Models.Animal;

import java.util.List;

public interface AnimalInterface {
    public List<Animal> getList();
    public Animal animalDetails(int id);
    public void animalCreate(Animal animal);
    public Animal animalUpdate(int id);
    public void animalDelete(int id);
}
