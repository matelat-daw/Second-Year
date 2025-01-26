package com.futureprograms.AnimalDB.Repositories;

import com.futureprograms.AnimalDB.Models.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AnimalInterface extends JpaRepository<Animal, Integer>
{
    List<Animal> findAll();
    Animal findById(int id);
    Animal save(Animal animal);
    void deleteById(int id);
}
