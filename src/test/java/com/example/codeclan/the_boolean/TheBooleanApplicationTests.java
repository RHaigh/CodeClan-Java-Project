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

import java.util.List;

import static org.junit.Assert.assertEquals;

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

	@Test
	public void canGetArticlesByCategory() {
		List<Article> found = articleRepository.findArticlesByCategory("Health");
		assertEquals(2, found.size());
	}

	@Test
	public void findByCategory() {

	}

}
