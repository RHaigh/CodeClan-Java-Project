package com.example.codeclan.the_boolean;

import com.example.codeclan.the_boolean.Models.Article;
import com.example.codeclan.the_boolean.Models.Journalist;
import com.example.codeclan.the_boolean.Repositories.ArticleRepository;
import com.example.codeclan.the_boolean.Repositories.JournalistRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TheBooleanApplicationTests {

	@Autowired
	ArticleRepository articleRepository;

	@Autowired
	JournalistRepository journalistRepository;

	@Test
	public void contextLoads() {
	}

//	@Test
//	public void canSaveArticle(){
//		Article article = new Article("Test", "test" ,"test", "Test");
//		articleRepository.save(article);
//	}
//
//	@Test
//	public void canSaveJournalist(){
//		Journalist journalist = new Journalist("John");
//		journalistRepository.save(journalist);
//	}

	@Test
	public void canSaveJournalistandArticle(){
		Journalist journalist = new Journalist("John");
		journalistRepository.save(journalist);

		Article article = new Article("Test", "test" ,"test", "Test",journalist);
		articleRepository.save(article);

	}


}
