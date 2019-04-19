package com.example.codeclan.the_boolean.Repositories;

import com.example.codeclan.the_boolean.Models.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article,Long> {

}
