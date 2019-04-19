package Models;

public class Article {
    private Long id;
    private String title;
    private String text;
    private String category;
    private String datePublished;

    public Article(String title, String text, String category, String datePublished) {
        this.title = title;
        this.text = text;
        this.category = category;
        this.datePublished = datePublished;
    }

    public Article() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
