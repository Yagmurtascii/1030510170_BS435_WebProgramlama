package com.guessNumber.GuessNumber.service;


import com.guessNumber.GuessNumber.model.Player;
import com.guessNumber.GuessNumber.repository.PlayerRepo;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PlayerService {
    private PlayerRepo repo;

    public List<Player> findByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username,password);
    }

    public Player createPlayer(String username, String password, String email)
    {
        if(repo.existsByUsernameOrEmail(username,email))
            throw new DataIntegrityViolationException("Username or email already exists");
        Player player = new Player();
        player.setUsername(username);
        player.setPassword(password);
        player.setEmail(email);

        return repo.save(player);
    }

    public Player updatePlayer(Integer id, String newUsername, String newPassword, String newEmail) {
        Optional<Player> optionalUser = repo.findById(id);

        if (optionalUser.isPresent()) {
            Player user = optionalUser.get();

            if (newUsername != null) {
                user.setUsername(newUsername);
            }

            if (newPassword != null) {
                user.setPassword(newPassword);
            }

            if (newEmail != null) {
                user.setEmail(newEmail);
            }

            return repo.save(user);
        }

        return null;
    }
}
