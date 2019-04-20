package com.example.codeclan.the_boolean.Repositories;

import com.example.codeclan.the_boolean.Models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {

}
