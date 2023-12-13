package com.guessNumber.GuessNumber.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration  implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/player/login")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "DELETE");

        registry.addMapping("/player/signIn")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "DELETE");

        registry.addMapping("/player/update")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("PUT");
    }
}
