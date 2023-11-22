package com.phydrogen.urltiny.data;

import org.springframework.data.annotation.Id;

public class Url {

    @Id
    private String id;

    private String longUrl;

    private String shortUrl;


    public Url(String longUrl) {
        this.longUrl = longUrl;
    }

    public Url() {}
    
    public String getId() {
        return id;
    }

    public String getLongUrl() {
        return longUrl;
    }

    public String getShortUrl() {
        return shortUrl;
    }
}