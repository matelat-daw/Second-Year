package com.futureprograms.Interfaces;

import com.futureprograms.Models.Farmacia;
import java.util.List;

public interface IPersitence {
    void openJSON();
    void closeJSON();
    void addFarmacia(Farmacia farmacia);
    void deleteFarmacia(Farmacia farmacia);
    List<Farmacia> list();
}