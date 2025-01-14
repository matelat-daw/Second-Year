package com.futureprogams.Usuario_Edad.Controllers;

import com.futureprogams.Usuario_Edad.Models.Greetings;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String saluda()
    {
        return "index";
    }

    @GetMapping("/felicita/{id}")
    public String hola(@PathVariable String id, @RequestParam(value = "age", name = "name") String age, String name)
    {
        return "/felicita";
    }

    @GetMapping("/greeting")
    public String greetingForm(Model model) {
        model.addAttribute("greeting", new Greetings());
        return "greeting";
    }

    @PostMapping("/greeting")
    public String greetingSubmit(@ModelAttribute Greetings greeting, Model model) {
        model.addAttribute("greeting", greeting);
        return "result";
    }
}