package com.futureprogams.Hola_Adios.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.thymeleaf.standard.expression.Fragment;

@Controller
public class MainController {

    @GetMapping("/")
    public String hola(Model model)
    {
        model.addAttribute("hola", "Hola Samigo!");
        return "index";
    }

    @GetMapping("/despedida")
    public String chau(Model model)
    {
        model.addAttribute("chau", "Adios Che!");
        return "bye";
    }
}