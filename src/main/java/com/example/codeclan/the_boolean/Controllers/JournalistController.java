package com.example.codeclan.the_boolean.Controllers;


import com.example.codeclan.the_boolean.Models.Journalist;
import com.example.codeclan.the_boolean.Repositories.ArticleRepository;
import com.example.codeclan.the_boolean.Repositories.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/journalists")
public class JournalistController {

    @Autowired
    JournalistRepository journalistRepository;

    @GetMapping
    public List<Journalist> getAllJournalist(){
        return journalistRepository.findAll();
    }

    @PostMapping(value = "/journalists")
    List <Journalist> journalist(@RequestBody Journalist journalist) {
        journalistRepository.save(journalist);
        return journalistRepository.findAll();
    }
}
