package com.example.codeclan.the_boolean.Repositories;

import com.example.codeclan.the_boolean.Models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {

    List<Article> findArticlesByCategory(String category);


}
