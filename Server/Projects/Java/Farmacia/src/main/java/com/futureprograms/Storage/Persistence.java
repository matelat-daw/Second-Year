package com.futureprograms.Storage;

import com.futureprograms.Interfaces.IPersitence;
import com.futureprograms.Models.Farmacia;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.FileWriter;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class Persistence implements IPersitence {
    private final String FIlESTORAGE_PATH = "src/Assets/Farmacias.json";
    private List<Farmacia> memStore;
    private final Gson gson = new Gson();

    @Override
    public void openJSON()
    {
        try {
            Reader reader = Files.newBufferedReader(Paths.get(FIlESTORAGE_PATH));

            memStore = gson.fromJson(reader, new TypeToken<List<Farmacia>>() {}.getType());

            reader.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public void closeJSON()
    {
        try {
            FileWriter writer = new FileWriter(FIlESTORAGE_PATH);
            gson.toJson(memStore, writer);
            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void addFarmacia(Farmacia farmacia)
    {
        memStore.add(farmacia);
    }

    @Override
    public void deleteFarmacia(Farmacia farmacia)
    {
        memStore.remove(farmacia);
    }

    @Override
    public List<Farmacia> list() {
        return memStore;
    }
}
