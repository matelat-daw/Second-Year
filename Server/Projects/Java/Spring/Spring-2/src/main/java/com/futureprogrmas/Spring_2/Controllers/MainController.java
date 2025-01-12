package Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String saluda(Model model)
    {
        model.addAttribute("saludo", "Hola Mi Gente!");
        return "index";
    }
}