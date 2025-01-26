package com.futureprograms.AnimalDB.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name="animales")

public class Animal {
    @Id
    private Integer id;
    @NotBlank
    @Size(min = 3, max = 15)
    private String name;
    @NotBlank
    @Range(min = 0, max = 600)
    private Integer average_life;
    private Boolean is_extinct;

    public Animal(){}

    public Animal(Integer id, String name, Integer age, boolean is_exticnt)
    {
        setId(id);
        setName(name);
        setAge(age);
        setExtinct(is_exticnt);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

     public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return average_life;
    }

    public void setAge(Integer age) {
        this.average_life = age;
    }

    public void setExtinct(Boolean extinct) {this.is_extinct = extinct;}

    public Boolean getExtinct() {return is_extinct;}
}