package com.phydrogen.urltiny.controller;

import com.phydrogen.urltiny.data.Url;
import com.phydrogen.urltiny.service.UrlService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
@RequestMapping("/r")
public class RedirectController {

    @Autowired
    private UrlService urlService;
    
    @GetMapping("/{id}")
    public RedirectView redirect(@PathVariable String id) {
        RedirectView redirectView = new RedirectView();

        List<Url> list = urlService.findAll();
        for (Url url : list) {
            if (id.equals(url.getShortUrl())) {
                System.out.println("\nWORKED !");
                String sUrl = url.getLongUrl();
                redirectView.setUrl(sUrl);
            }
        }
        return redirectView;
    }
}
