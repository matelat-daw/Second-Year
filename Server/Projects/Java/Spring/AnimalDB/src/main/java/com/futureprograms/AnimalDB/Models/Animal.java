package com.futureprograms.AnimalDB.Models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jdk.jfr.Enabled;
import org.hibernate.validator.constraints.Range;

@Entity
public class Animal {
    private String id;
    @NotBlank
    @Size(min = 3, max = 15)
    private String name;
    @NotBlank
    @Range(min = 0, max = 600)
    private String averageLife;
    private Boolean isExtinct;

    public Animal(){}

    public Animal(String id, String name, String age, boolean isExticnt)
    {
        setId(id);
        setName(name);
        setAge(age);
        setExtinct(isExticnt);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

     public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return averageLife;
    }

    public void setAge(String age) {
        this.averageLife = age;
    }

    public void setExtinct(Boolean extinct) {this.isExtinct = extinct;}

    public Boolean getExtinct() {return isExtinct;}
}