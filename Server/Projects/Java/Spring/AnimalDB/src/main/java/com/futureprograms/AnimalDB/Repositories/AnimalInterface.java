package com.futureprograms.AnimalDB.Repositories;

import com.futureprograms.AnimalDB.Models.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AnimalInterface extends JpaRepository<Animal, Integer>
{
    /*List<Animal> getList();*/
    List<Animal> findAll();
    Animal animalDetails(int id);
    <S extends Animal> S save(S entity);
    Animal animalUpdate(int id, Animal animal);
    /*void animalDelete(int id);*/
    void deleteById(int id);
}
