package com.futureprograms.Animales.Models;

public class Animales {
    private String id;
    private String name;
    private String age;
    private Boolean extinct;

    public void setExtinct(Boolean extinct) {this.extinct = extinct;}

    public Boolean getExtinct() {return extinct;}

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
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}