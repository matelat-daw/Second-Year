package com.futureprogams.Usuario_Edad.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
    @GetMapping("/")
    public String usurios(@PathVariable String id, Model model)
    {

        return "index";
    }

    @GetMapping("/saludame")
    public String syaHellow(@RequestParam(value = "name", required = false));
    {
        return true;
    }
}
