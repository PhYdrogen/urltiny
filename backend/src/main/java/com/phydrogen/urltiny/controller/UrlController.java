package com.phydrogen.urltiny.controller;

import com.phydrogen.urltiny.service.UrlService;
import com.phydrogen.urltiny.data.Url;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/url")

public class UrlController {
    @Autowired
    private UrlService urlService;

    @GetMapping
    public List<Url> findAll() {
        return urlService.findAll();
    }
    
    @GetMapping("/{id}")
    public Url findById(@PathVariable String id) {
        return urlService.findById(id);
    }

    @PostMapping
    public Url create(@RequestBody Url url){
        url.setShortUrl();
        return urlService.save(url);
    }

    @PutMapping("/{id}")
    public Url update(@RequestBody Url url){
        return urlService.save(url);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id){
        urlService.deleteById(id);
    }
}
