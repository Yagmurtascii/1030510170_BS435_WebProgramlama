package com.guessNumber.GuessNumber.controller;


import com.guessNumber.GuessNumber.model.Player;
import com.guessNumber.GuessNumber.service.PlayerService;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/player")
@AllArgsConstructor
public class PlayerController {

    private PlayerService service;

    @PostMapping("/login")
    public ResponseEntity<List<Player>> getUserByUsernameAndPassword(@RequestBody Player player) {
        List<Player> user = service.findByUsernameAndPassword(player.getUsername(), player.getPassword());
        if (user != null && !user.isEmpty()) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/signIn")
    public ResponseEntity<Player> registerPlayer(@RequestBody Player player) {
        Player newPlayer = service.createPlayer(player.getUsername(), player.getPassword(), player.getEmail());
        return ResponseEntity.ok(player);
    }

    @PutMapping("/update")
    public ResponseEntity<Player> updateUser(@RequestBody Player player) {
        Integer id = player.getId();
        String newUsername = player.getUsername();
        String newPassword = player.getPassword();
        String newEmail = player.getEmail();
        Player updatedPlayer = service.updatePlayer(id, newUsername, newPassword, newEmail);
        if (updatedPlayer != null) {
            return new ResponseEntity<>(updatedPlayer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
