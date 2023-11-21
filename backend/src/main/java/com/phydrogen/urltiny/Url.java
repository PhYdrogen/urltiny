package com.phydrogen.urltiny.data;

public class Url {

    @Id
    private String id;

    private String longUrl;

    private String shortUrl;

    public Url(String longUrl, String shortUrl) {
        this.longUrl = longUrl;
        this.shortUrl = shortUrl;
    }

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