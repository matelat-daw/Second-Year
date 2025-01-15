package com.futureprogams.Usuario_Edad.Controllers;

import com.futureprogams.Usuario_Edad.Models.Greetings;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String saluda(Model model)
    {
        model.addAttribute("title", "Página Pricipal");
        return "index";
    }

    @GetMapping("/greeting")
    public String greetingForm(Model model) {
        model.addAttribute("title", "Formulario pra Saludar");
        model.addAttribute("greeting", new Greetings());
        return "greeting";
    }

    @PostMapping("/greeting")
    public String greetingSubmit(@ModelAttribute Greetings greeting, Model model) {
        model.addAttribute("title", "Página de Saludo");
        model.addAttribute("greeting", greeting);
        return "result";
    }
}