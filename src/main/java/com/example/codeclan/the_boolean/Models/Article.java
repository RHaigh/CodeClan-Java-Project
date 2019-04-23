package com.example.codeclan.the_boolean.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "articles")
public class Article implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String title;

    @Column(columnDefinition = "VARCHAR(1024)")
    private String text;

    @Column
    private String category;

    @Column
    private String datePublished;

    @Column
    private String image;

    @JsonIgnoreProperties("articles")
    @ManyToOne
    @JoinColumn(name = "journalist_id", nullable = false)
    Journalist journalist;

    public Article(String title, String text, String category, String datePublished, Journalist journalist, String image) {
        this.title = title;
        this.text = text;
        this.category = category;
        this.datePublished = datePublished;
        this.journalist = journalist;
        this.image = image;
    }

    public Article() {

    }

    public Journalist getJournalist() {
        return journalist;
    }

    public void setJournalist(Journalist journalist) {
        this.journalist = journalist;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDatePublished() {
        return datePublished;
    }

    public void setDatePublished(String datePublished) {
        this.datePublished = datePublished;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
