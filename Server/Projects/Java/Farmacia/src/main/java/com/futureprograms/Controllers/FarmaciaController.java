package com.futureprograms.Controllers;

import com.futureprograms.Models.Farmacia;
import com.futureprograms.Storage.Persistence;
import java.util.List;

public class FarmaciaController {
    private final Persistence pst;

    public FarmaciaController()
    {
        pst = new Persistence();
        pst.openJSON();
    }

    public String listarFarmacias()
    {
        return pst.list().toString();
    }

    public String buscarFarmacia(String name)
    {
        List<Farmacia> farmacias = pst.list();

        return farmacias.stream()
                .filter(farmacia -> farmacia.getNOMBRE().toLowerCase().contains(name.toLowerCase())).toList().toString();
    }

    public void insertarFarmacia(String name, String phone, String web)
    {
        Farmacia nueva = new Farmacia(web, null, phone, name, 0, 0);
        pst.addFarmacia(nueva);
    }

    public String borrarFarmacia(String phone)
    {
        List<Farmacia> farmacias = pst.list();
        Farmacia borrar = farmacias.stream()
                .filter(farmacia -> farmacia.getTELEFONO().contains(phone)).findFirst().orElse(null);
        if (borrar != null) {
            pst.deleteFarmacia(borrar);
            return "Se Ha Borrado la Farmacia: " + borrar;
        }
            return "No hay Ninguna Farmacia con ese Número de Teléfono.";
    }

    public boolean saveFarmacias()
    {
        pst.closeJSON();
        return true;
    }
}
