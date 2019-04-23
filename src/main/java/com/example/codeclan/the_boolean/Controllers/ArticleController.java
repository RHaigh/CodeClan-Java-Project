package com.example.codeclan.the_boolean.Controllers;

import com.example.codeclan.the_boolean.Models.Article;
import com.example.codeclan.the_boolean.Models.Journalist;
import com.example.codeclan.the_boolean.Repositories.ArticleRepository;
import com.example.codeclan.the_boolean.Repositories.JournalistRepository;
import org.hibernate.mapping.Array;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    JournalistRepository journalistRepository;

    @GetMapping
    public List<Article> getAllArticles() {

        List <Article> articles = new ArrayList<>();
        articles = articleRepository.findAll(Sort.by(Sort.Direction.DESC,"datePublished"));
        return articles;
    }

    @GetMapping(value = "/{id}")
    Optional<Article> findArticleById(@PathVariable Long id) {
        return articleRepository.findById(id);
    }

    @PostMapping(value = "/{journalistId}")
    List <Article> createArticle(@RequestBody Article article, @PathVariable long journalistId) {
        Journalist journalist = journalistRepository.getOne(journalistId);
        journalist.addArticle(article);
        article.setJournalist(journalist);
        articleRepository.save(article);
        return articleRepository.findAll();
    }

    @DeleteMapping(value = "/{id}")
    List<Article> deleteArticle(@PathVariable Long id) {
        articleRepository.deleteById(id);
        return articleRepository.findAll();
    }

    @PatchMapping(value = "/{id}")
    List<Article> updateArticle(@PathVariable Long id, @RequestBody Article newArticle) {
        Article article = new Article();
        article = newArticle;
        article.setId(id);
        articleRepository.save(article);
        return articleRepository.findAll();
    }

    @GetMapping(value = "/category/{category}")
    public List <Article> getArticlesByCategory(@PathVariable String category) {
        return articleRepository.findArticlesByCategory(category);
    }

}


