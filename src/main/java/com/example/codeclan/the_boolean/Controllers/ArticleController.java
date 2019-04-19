package com.example.codeclan.the_boolean.Controllers;

import com.example.codeclan.the_boolean.Models.Article;
import com.example.codeclan.the_boolean.Repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping
    public List<Article> getAllArticles(){
        return articleRepository.findAll();
    }

}


