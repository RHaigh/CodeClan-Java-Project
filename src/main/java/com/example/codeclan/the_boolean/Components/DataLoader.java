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

        Journalist journalist1 = new Journalist("Elisa Scoopdottir");
        journalistRepository.save(journalist1);

        Journalist journalist2 = new Journalist("Richard Hearsay");
        journalistRepository.save(journalist2);

        Journalist journalist3 = new Journalist("Any-Story Starke");
        journalistRepository.save(journalist3);

        Journalist journalist4 = new Journalist("Aaron McFakeNews");
        journalistRepository.save(journalist4);

        Article article = new Article("'More like software-get-it-right-first-time!' Declares Programmer Who Has Not Had a Bug in 20 years", "A San Francisco man has claimed software development is “actually basically pure pish”, and taken to reddit to tell a remarkable story. Posting under his pseudonym, “Pyth0nSkillz”, he opened himself up to questions via the popular subreddit r/AMA (ask me anything), where users with an interesting story answer questions posed to them by other users:“I haven’t made a single typo, one wee spelling mistake or had a bug in my code in 20 years of programming, AMA” read the thread.The post was quickly taken down, after an aggressive campaign of doxxing claimed to reveal the poster as being a 19 year-old first year computer science student in Dundee." ,"Community", "20-04-2019", journalist1, "/images/lyingcoder.png");
        articleRepository.save(article);

        Article article2 = new Article("'Don’t worry about indentation, pass it here mate.' - A feature by Sandy McMillan" , "Time and time again, students come to me with problems in their code, and their indentation is all over the shop  ... If there’s one motto I have for software development, it’s to get it down in the text editor, and worry about your indentation at the end of a project, only if you have time. Well, it’s less a motto and more a statement really I suppose. On that note I’ve always said planning in general is not really all it’s cracked up to be. Nothing ever gets done by planning! Cheers, that’s all,Sandy McMillan" ,"Education", "19-01-2019", journalist2, "/images/sandy.png");
        articleRepository.save(article2);

        Article article3 = new Article("UX Designer Quits UX Design To Become Artist After Proto Persona She Drew Turns Out To Be a Real Person", "A UX Designer will hand in her notice today after spotting a man she previously drew for a project last financial year.“He was a spitting image,” Lizzie, 27, said, after accosting the man while he ate dinner in a Paisley restaurant with his children. “I thought I recognised him from somewhere, you know, in that way that you think you recognise someone, and then it clicked. He was my creation!”Lizzie will now enrol at the Royal College of Arts London from September, forgoing her £40,000 salary to enrol on the Fine Arts program. “It’s a big commitment,” she said. “But I think the picture speaks for itself. It’s pretty clear I have a gift.”The man pictured, unnamed, declined to comment." ,"Career News", "17-04-2017", journalist3, "/images/protopersonaguy.png");
        articleRepository.save(article3);

        Article article4 = new Article("Dev Team Sharing Feelings of Imposter Syndrome Realise No-one Actually Hired Any of Them, Steal Company Computers, Flee", "There was pandemonium in an office today in Kirkcaldy as a conversation in the staff kitchen gave rise to an extraordinary revelation. While confiding about feelings of not being quite good enough for their respective roles, and overwhelmed by the skill of one another, it came to light that not one of them had actually been hired.Clearly, a feeling of liberation came with this new information, and the four staff involved promptly fled with roughly £8500 worth of company-owned laptops.Readers are encouraged to contact Police Scotland on +44 131859203 if they recognise any of the four figures below. They are not believed to be dangerous." ,"Controversy", "21-04-2019", journalist4, "/images/thieves.png");
        articleRepository.save(article4);

        Article article5 = new Article("Backend Developer Attempting to Write Septuple Nested Loop Left in 'Permanent Trip'", "A Java Developer in Kilmarnock has been pronounced by colleagues as 'Permafried' after attempting to write not a quadruple, quintuple or sextuple (or triple, for that matter) but a SEPTUPLE nested loop. David Johnson, 47, with no previous association with psychedelia, began 'random laughter' at around 3:45pm on Monday before posting a series of nonsensical questions on Stack Overflow. After a snooze, he was described by colleagues as 'A little too chilled'. David did grant The Boolean interview, but only seemed to be able to muster the words 'public', 'static', 'void', and 'for' - and not necessarily in that order, or in a logical manner.", "Health", "15-03-2019", journalist1, "/images/trippingguy.png");
        articleRepository.save(article5);
    }

}
