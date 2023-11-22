package com.phydrogen.urltiny.service;

import com.phydrogen.urltiny.data.Url;
import com.phydrogen.urltiny.repository.UrlRepository;
import com.phydrogen.urltiny.exception.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UrlService {
    
    @Autowired
    private UrlRepository urlRepo;

    public List<Url> findAll(){
        return urlRepo.findAll();
    }
    public Url findById(String id) {
        return urlRepo.findById(id).orElseThrow(EntityNotFoundException::new);
    }
    public Url save(Url url) {
        return urlRepo.save(url);
    }
    public void deleteById(String id) {
        urlRepo.deleteById(id);
    }
}
