package com.phydrogen.urltiny.repository;

import com.phydrogen.urltiny.data.Url;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UrlRepository extends MongoRepository<Url, String> {}
