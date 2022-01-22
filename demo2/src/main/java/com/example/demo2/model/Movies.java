package com.example.demo2.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
public class Movies {

    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private String id;

    private String Name;
    private String Author;

    private String Description;
    private boolean Watched;

    public Movies(String Name, String Author, String Description, boolean Watched) {

        this.Name = Name;
        this.Author = Author;
        this.Description = Description;
        this.Watched = Watched;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getAuthor() {
        return Author;
    }

    public void setAuthor(String author) {
        Author = author;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public boolean isWatched() {
        return Watched;
    }

    public void setWatched(boolean watched) {
        Watched = watched;
    }

    @Override
    public String toString() {
        return "Movie [id=" + id + ", Name=" + Name + ", Author=" + Author + ", Description=" + Description
                + "watched=" + Watched + "]";
    }
}
