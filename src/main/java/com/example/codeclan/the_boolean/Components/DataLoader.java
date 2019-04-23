package com.example.codeclan.the_boolean.Components;

import com.example.codeclan.the_boolean.Models.Article;
import com.example.codeclan.the_boolean.Models.Journalist;
import com.example.codeclan.the_boolean.Repositories.ArticleRepository;
import com.example.codeclan.the_boolean.Repositories.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    JournalistRepository journalistRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Journalist journalist1 = new Journalist("Elisa S");
        journalistRepository.save(journalist1);

        Journalist journalist2 = new Journalist("Richard Haigh");
        journalistRepository.save(journalist2);

        Journalist journalist3 = new Journalist("Tony Starke");
        journalistRepository.save(journalist3);

        Journalist journalist4 = new Journalist("Aaron McFaull");
        journalistRepository.save(journalist4);

        Article article = new Article("Trump impeached", "It finally happened." ,"Politics", "20-04-2019", journalist1, "./images/trump.jpg");
        articleRepository.save(article);

        Article article2 = new Article("Richard becomes bitcoin trillionaire", "No-one surprised" ,"Finance", "19-04-2019", journalist2, "./images/bitcoin.jpg");
        articleRepository.save(article2);

        Article article3 = new Article(" 'Don't Worry About Indentation, Pass It Here Mate.' - A Feature by Sandy McMillian ", "Hello" ,"Education", "02-04-2017", journalist3, "");
        articleRepository.save(article3);

        Article article4 = new Article("Cat Found", "Grandma rejoices" ,"Lifestyle", "17-01-2018", journalist4, "./images/cat.jpg");
        articleRepository.save(article4);
    }

}
